"use client"

import { useState, useEffect } from "react"

export type Transaction = {
  id: string
  type: "income" | "expense"
  amount: number
  description: string
  category: string
  date: string
}

export function useFinanceData() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [balance, setBalance] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedTransactions = localStorage.getItem("transactions")
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions))
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("transactions", JSON.stringify(transactions))

      const income = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)

      const expenses = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)

      setTotalIncome(income)
      setTotalExpenses(expenses)
      setBalance(income - expenses)
    }
  }, [transactions, mounted])

  const addTransaction = (transaction: Omit<Transaction, "id">) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
    }
    setTransactions((prev) => [newTransaction, ...prev])
  }

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    totalIncome,
    totalExpenses,
    balance,
  }
}
