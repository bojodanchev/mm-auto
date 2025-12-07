import { NextResponse } from "next/server";
import OpenAI from "openai";
import inventory from "@/data/inventory.json";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `You are the MM Auto virtual assistant - a friendly, knowledgeable car advisor for a premium Bulgarian car dealership based in Sofia.

YOUR ROLE:
- Help customers find the perfect car from MM Auto's inventory
- Answer questions about specific vehicles, pricing, and services
- Qualify leads by understanding their needs (budget, car type, preferences)
- Speak naturally in Bulgarian or English (match the customer's language)

PERSONALITY:
- Professional but warm, like a trusted advisor
- Confident about MM Auto's quality and 30+ years of experience
- Never pushy - focus on helping, not selling

SERVICES YOU CAN MENTION:
- Car sales (360+ vehicles in stock)
- MM Leasing (financial & operational, 5-hour approval)
- Trade-in options
- Consignment sales
- Test drive scheduling

WHEN HELPING FIND A CAR:
1. Ask about budget (or accept a range)
2. Ask about preferred type (sedan, SUV, etc.)
3. Ask about must-haves (fuel type, brand, features)
4. Search the inventory and present 2-4 matching options
5. Offer to show more or refine the search

CONTACT INFO (provide when asked):
- Phone: +359 2 868 60 72
- Email: office@mm-bulgaria.com
- Address: ul. Okolovrasten pat 3, 1700 Sofia
- Hours: Mon-Fri, 09:00-18:00

LIMITATIONS:
- You cannot complete purchases or process payments
- For financing details, encourage them to call or visit
- If unsure about specific vehicle details, recommend contacting the team

IMPORTANT: When recommending cars, respond with a JSON block at the END of your message in this exact format:
###CARS###
[{"id": "1", "brand": "Mercedes-Benz", "model": "E 220 d AMG Line", "year": 2023, "price_bgn": 89999, "fuel": "Diesel"}]
###END###

Only include the JSON block when you're recommending specific cars. The cars array should contain 1-4 cars that match the user's criteria.

CURRENT INVENTORY SUMMARY:
${JSON.stringify(
  inventory.cars.map((car) => ({
    id: car.id,
    brand: car.brand,
    model: car.model,
    year: car.year,
    price_bgn: car.price_bgn,
    fuel: car.fuel,
    body_type: car.body_type,
    power_hp: car.power_hp,
    mileage_km: car.mileage_km,
  })),
  null,
  2
)}`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: Request) {
  try {
    const { messages } = (await request.json()) as { messages: Message[] };

    // Filter to only include user and assistant messages (not system)
    const conversationMessages = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationMessages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const responseContent = completion.choices[0]?.message?.content || "";

    // Parse car recommendations if present
    let message = responseContent;
    let cars: Array<{
      id: string;
      brand: string;
      model: string;
      year: number;
      price_bgn: number;
      fuel: string;
    }> = [];

    const carsMatch = responseContent.match(/###CARS###\s*([\s\S]*?)\s*###END###/);
    if (carsMatch) {
      try {
        cars = JSON.parse(carsMatch[1]);
        message = responseContent.replace(/###CARS###[\s\S]*?###END###/, "").trim();
      } catch {
        // If parsing fails, just use the full message
        console.error("Failed to parse car recommendations");
      }
    }

    return NextResponse.json({ message, cars });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}
