"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { SendHorizontal, Mic, Car, User, Paperclip } from "lucide-react"

type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export function ChatInterface() {
  // Replace the existing useState for messages with this updated version that includes predefined answers
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI car assistant. How can I help diagnose your vehicle today? Try using code words like EXPLAIN, COST, DIY, PARTS, PREVENT, or SYMPTOMS for specific information.",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Replace the handleSendMessage function with this updated version that handles code words
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Check for code words (convert to uppercase for case-insensitive matching)
    const upperInput = input.toUpperCase()
    let aiResponse = ""

    // Predefined responses for code words
    if (upperInput.includes("EXPLAIN")) {
      aiResponse =
        "EXPLAIN: Car problems often stem from interconnected systems. For example, a failing alternator not only affects battery charging but can cause cascading electrical issues. The alternator converts mechanical energy into electrical energy to power your vehicle's electrical systems and recharge the battery. When it fails, you might notice dimming lights, electrical system warnings, or difficulty starting. This happens because the battery isn't being recharged properly while the engine runs. Modern vehicles have complex electrical systems with computers that monitor performance, which is why a single failing component can trigger multiple symptoms across different systems."
    } else if (upperInput.includes("COST")) {
      aiResponse =
        "COST: Repair costs vary widely based on vehicle make, model, and your location. For reference: Basic electrical repairs (alternator, starter) typically range from $250-600. Engine repairs can range from $500-2,500 depending on severity. Transmission work often costs $1,200-3,500. Labor rates vary from $75-150 per hour depending on your location and whether you use a dealership or independent shop. Parts quality also affects cost—OEM (Original Equipment Manufacturer) parts cost more than aftermarket alternatives but may offer better reliability. Always get multiple quotes for major repairs, and consider both parts and labor in your budget planning."
    } else if (upperInput.includes("DIY")) {
      aiResponse =
        "DIY: Many car repairs can be done at home with basic tools. Start with simple maintenance like oil changes, air filter replacement, and battery maintenance. For DIY success: 1) Always disconnect the battery before electrical work, 2) Use jack stands, never just a jack, when working underneath, 3) Consult your vehicle's service manual for specifications, 4) Take photos before disassembly to remember how things fit, 5) Use quality tools to avoid stripping fasteners, 6) Work in a well-ventilated area, especially with fluids or chemicals. Remember that some repairs require specialized tools or diagnostic equipment that might make professional service more cost-effective."
    } else if (upperInput.includes("PARTS")) {
      aiResponse =
        "PARTS: When purchasing replacement parts, you have several options: 1) OEM (Original Equipment Manufacturer) parts match what came with your vehicle and typically offer the best fit and reliability, but at premium prices. 2) Aftermarket parts are made by third parties and vary in quality—research brands before purchasing. 3) Remanufactured parts are rebuilt to meet specifications and offer a middle ground between new and used. 4) Used/salvage parts from junkyards can save money on certain components. For critical systems like brakes or steering, prioritize quality over cost. Online retailers often offer better prices than physical stores, but verify return policies before purchasing."
    } else if (upperInput.includes("PREVENT")) {
      aiResponse =
        "PREVENT: Preventive maintenance is the key to avoiding costly repairs. Follow your vehicle's maintenance schedule for oil changes, fluid checks, and inspections. Pay attention to warning signs: unusual noises, warning lights, fluid leaks, or changes in performance. Regular checks should include: 1) Monthly tire pressure and tread inspection, 2) Quarterly fluid level checks (oil, coolant, brake, transmission), 3) Seasonal battery testing, especially before extreme weather, 4) Annual brake inspections, 5) Timing belt replacement at recommended intervals. Keep a maintenance log to track service history. Remember that addressing small issues early prevents them from becoming major problems."
    } else if (upperInput.includes("SYMPTOMS")) {
      aiResponse =
        "SYMPTOMS: Recognizing symptoms correctly is crucial for accurate diagnosis. Engine noises: Knocking often indicates bearing problems, while hissing suggests a vacuum leak or coolant issue. Fluid leaks: Clear water is normal AC condensation, while colored fluids indicate specific system leaks (green/orange for coolant, red for transmission, brown for oil). Smoke colors matter: Blue smoke indicates oil burning, white smoke (when engine is warm) suggests coolant in combustion chambers, black smoke points to rich fuel mixture. Vibrations at specific speeds often relate to tire balance or drivetrain issues, while constant vibrations may indicate engine mounts or exhaust problems."
    } else {
      // Random responses for non-code word inputs
      const aiResponses = [
        "Based on your description, this sounds like it could be a problem with your alternator. The alternator charges your battery while the engine is running, and if it's failing, you'll experience electrical issues and eventually the car will die. Try using the code word EXPLAIN for more details about how this system works.",
        "That sounds like it could be a failing fuel pump. When the fuel pump starts to go bad, it can't deliver the right amount of fuel to the engine, causing the symptoms you're describing. If you'd like to know about repair costs, try using the code word COST.",
        "From what you're describing, this is likely an issue with your spark plugs or ignition coils. When these components fail, they cause misfires which lead to rough running and poor performance. If you're considering fixing this yourself, try the code word DIY for some guidance.",
        "This sounds like it could be a vacuum leak. Vacuum leaks can cause rough idling, stalling, and poor fuel economy because they allow unmetered air into the engine. To learn about the parts you might need to replace, try using the code word PARTS.",
      ]

      aiResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)] +
        " You can also try other code words like PREVENT or SYMPTOMS for more specific information."
    }

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex flex-col h-[600px] rounded-lg border border-zinc-800 bg-zinc-900/50 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <Avatar className={`h-8 w-8 ${message.sender === "user" ? "ml-2" : "mr-2"}`}>
                  {message.sender === "user" ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Car className="h-5 w-5 text-emerald-400" />
                  )}
                </Avatar>
                <div>
                  <Card
                    className={`px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-emerald-500 text-white border-emerald-600"
                        : "bg-zinc-800 border-zinc-700"
                    }`}
                  >
                    <p>{message.content}</p>
                  </Card>
                  <p className="mt-1 text-xs text-zinc-500">{formatTime(message.timestamp)}</p>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex flex-row">
                <Avatar className="h-8 w-8 mr-2">
                  <Car className="h-5 w-5 text-emerald-400" />
                </Avatar>
                <Card className="px-4 py-3 bg-zinc-800 border-zinc-700">
                  <div className="flex space-x-1">
                    <div
                      className="h-2 w-2 rounded-full bg-zinc-500 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="h-2 w-2 rounded-full bg-zinc-500 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="h-2 w-2 rounded-full bg-zinc-500 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-zinc-800 p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Button type="button" size="icon" variant="outline" className="flex-shrink-0">
            <Paperclip className="h-5 w-5" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Button type="button" size="icon" variant="outline" className="flex-shrink-0">
            <Mic className="h-5 w-5" />
            <span className="sr-only">Voice input</span>
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your car problem..."
            className="flex-1 bg-zinc-800 border-zinc-700"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isLoading}
            className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-600"
          >
            <SendHorizontal className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
