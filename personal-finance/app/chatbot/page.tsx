"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useFinanceChatbot } from "@/hooks/use-finance-chatbot"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ChatbotPage() {
  const { messages, sendMessage, codeWords } = useFinanceChatbot()
  const [input, setInput] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current
      scrollContainer.scrollTop = scrollContainer.scrollHeight
    }
  }, [messages])

  if (!mounted) {
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    sendMessage(input)
    setInput("")
  }

  const handleCodeWordClick = (codeWord: string) => {
    sendMessage(codeWord)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="h-[calc(100vh-12rem)]">
        <CardHeader>
          <CardTitle>Finance Advisor</CardTitle>
          <CardDescription>Ask questions or select a code word for instant financial advice</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-12rem)]">
          <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
            <div className="space-y-4 mb-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{message.role === "user" ? "U" : "A"}</AvatarFallback>
                      {message.role === "bot" && <AvatarImage src="/placeholder.svg?height=32&width=32" />}
                    </Avatar>
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p>{message.content}</p>
                      <div
                        className={`text-xs mt-1 ${
                          message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
            <Input
              placeholder="Ask a finance question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-2">
          <div className="text-sm text-muted-foreground mr-2">Code Words:</div>
          {codeWords.map((codeWord) => (
            <Badge
              key={codeWord}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => handleCodeWordClick(codeWord)}
            >
              {codeWord}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </div>
  )
}
