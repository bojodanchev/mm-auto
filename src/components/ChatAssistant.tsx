"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Car } from "lucide-react";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
  cars?: CarRecommendation[];
}

interface CarRecommendation {
  id: string;
  brand: string;
  model: string;
  year: number;
  price_bgn: number;
  fuel: string;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Здравейте! Аз съм виртуалният асистент на MM Auto. Как мога да ви помогна днес? Мога да ви помогна да намерите перфектния автомобил, да отговоря на въпроси за нашите услуги или да ви дам информация за конкретен модел.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message,
          cars: data.cars,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Съжалявам, възникна проблем. Моля, опитайте отново или се свържете с нас на +359 2 868 60 72.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const fuelLabel = (fuel: string) => {
    switch (fuel) {
      case "Diesel": return "Дизел";
      case "Petrol": return "Бензин";
      case "Electric": return "Електро";
      case "Hybrid": return "Хибрид";
      default: return fuel;
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#0066ff] flex items-center justify-center shadow-lg shadow-[#00a8ff]/30 hover:scale-110 transition-transform ${
          isOpen ? "hidden" : ""
        }`}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-0 right-0 z-50 w-full sm:w-[420px] sm:bottom-6 sm:right-6 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full sm:translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="glass rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col h-[85vh] sm:h-[600px]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00a8ff] to-[#0066ff] flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">MM Auto Асистент</h3>
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Онлайн
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-[#00a8ff] to-[#0066ff] text-white"
                      : "bg-white/5 text-gray-200"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>

                  {/* Car Recommendations */}
                  {message.cars && message.cars.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.cars.map((car) => (
                        <Link
                          key={car.id}
                          href={`/inventory/${car.id}`}
                          onClick={() => setIsOpen(false)}
                          className="block p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <p className="text-white font-medium text-sm">
                            {car.brand} {car.model}
                          </p>
                          <div className="flex gap-2 mt-1 text-xs text-gray-300">
                            <span>{car.year}</span>
                            <span>•</span>
                            <span>{fuelLabel(car.fuel)}</span>
                            <span>•</span>
                            <span className="text-[#00a8ff] font-medium">
                              {car.price_bgn.toLocaleString()} лв.
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Мисля...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Напишете съобщение..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00a8ff]/50 text-sm disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00a8ff] to-[#0066ff] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
            <p className="text-center text-gray-500 text-xs mt-2">
              AI асистент • Може да допусне грешки
            </p>
          </form>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
