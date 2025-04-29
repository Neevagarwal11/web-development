"use client"

import { useState, useEffect } from "react"

export type SavingsGoal = {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  deadline?: string
  description?: string
}

export function useSavingsGoals() {
  const [goals, setGoals] = useState<SavingsGoal[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedGoals = localStorage.getItem("savingsGoals")
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals))
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("savingsGoals", JSON.stringify(goals))
    }
  }, [goals, mounted])

  const addGoal = (goal: Omit<SavingsGoal, "id">) => {
    const newGoal = {
      ...goal,
      id: Date.now().toString(),
    }
    setGoals((prev) => [...prev, newGoal])
  }

  const updateGoal = (id: string, updates: Partial<SavingsGoal>) => {
    setGoals((prev) => prev.map((goal) => (goal.id === id ? { ...goal, ...updates } : goal)))
  }

  const deleteGoal = (id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id))
  }

  return {
    goals,
    addGoal,
    updateGoal,
    deleteGoal,
  }
}
