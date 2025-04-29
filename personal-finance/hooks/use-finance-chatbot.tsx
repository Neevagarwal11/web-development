"use client"

import { useState } from "react"

export type ChatMessage = {
  id: string
  role: "user" | "bot"
  content: string
  timestamp: number
}

// Replace the predefinedAnswers object with this more concise version
const predefinedAnswers: Record<string, string> = {
  BUDGET101:
    "Create a 50/30/20 budget: 50% for needs (housing, food, utilities), 30% for wants (entertainment, dining out), and 20% for savings and debt repayment. Track all expenses for a month to understand your spending patterns before setting category limits.",
  DEBTFREE:
    "To eliminate debt, list all debts with interest rates. Either tackle highest interest first (avalanche method) or smallest balance first (snowball method). Make minimum payments on all debts, then put extra money toward your target debt. Once paid, roll that payment to the next debt.",
  SAVESMART:
    "Build an emergency fund covering 3-6 months of expenses in a high-yield savings account. Then save for specific goals using separate accounts. Automate transfers on payday. Consider certificates of deposit (CDs) for higher interest if you won't need immediate access.",
  INVEST101:
    "Start investing with low-cost index funds that track the market. Prioritize tax-advantaged accounts like 401(k)s (especially with employer match) and IRAs. Diversify across stocks, bonds, and other assets based on your age and risk tolerance. Invest regularly regardless of market conditions.",
  CREDITSCORE:
    "Improve your credit score by paying bills on time (35% of score), keeping credit utilization below 30% (30% of score), maintaining older accounts (15%), limiting new credit applications (10%), and having a mix of credit types (10%). Check your credit report annually for errors.",
  TAXSMART:
    "Maximize tax deductions through retirement contributions, HSA/FSA accounts, mortgage interest, and charitable donations. Keep organized records of all potential deductions throughout the year. Consider tax-loss harvesting for investments. If self-employed, track business expenses carefully.",
  RETIREPLAN:
    "Start retirement planning early. Aim to save 15% of income. Max out employer 401(k) match, then consider Roth IRA. Increase savings rate with each raise. Adjust investment mix to become more conservative as retirement approaches. Consider future healthcare costs in your planning.",
  HOMEBUYING:
    "Before buying a home, save 20% for down payment to avoid PMI. Get pre-approved for a mortgage. Budget for closing costs (2-5% of loan), ongoing maintenance (1-3% of home value annually), property taxes, and insurance. Don't exceed 28% of gross income on housing costs.",
}

// Add this new codeWords array after the predefinedAnswers object
const codeWords = Object.keys(predefinedAnswers)

// Update the useFinanceChatbot function to include the codeWords
export function useFinanceChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      content:
        "Hello! I'm your finance assistant. Select a code word below or ask me a question about personal finance.",
      timestamp: Date.now(),
    },
  ])

  const addMessage = (content: string, role: "user" | "bot") => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: Date.now(),
    }
    setMessages((prev) => [...prev, newMessage])
    return newMessage
  }

  const getResponse = (userMessage: string) => {
    // Check if the message is a code word
    const upperCaseMessage = userMessage.toUpperCase()
    if (predefinedAnswers[upperCaseMessage]) {
      return predefinedAnswers[upperCaseMessage]
    }

    // Check for keyword matches in predefined answers
    const lowerCaseMessage = userMessage.toLowerCase()
    for (const [keyword, answer] of Object.entries(predefinedAnswers)) {
      if (lowerCaseMessage.includes(keyword.toLowerCase())) {
        return answer
      }
    }

    // Default responses if no keywords match
    const defaultResponses = [
      "I'm not sure about that specific topic. Try using one of the code words like BUDGET101, DEBTFREE, or INVEST101 for specific advice.",
      "That's a good question. For specific advice, try one of our code words like SAVESMART, CREDITSCORE, or RETIREPLAN.",
      "I don't have specific information on that. Try using a code word like TAXSMART or HOMEBUYING for relevant financial advice.",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const sendMessage = (content: string) => {
    if (!content.trim()) return

    // Add user message
    addMessage(content, "user")

    // Generate bot response
    setTimeout(() => {
      const botResponse = getResponse(content)
      addMessage(botResponse, "bot")
    }, 500)
  }

  return {
    messages,
    sendMessage,
    codeWords,
  }
}
