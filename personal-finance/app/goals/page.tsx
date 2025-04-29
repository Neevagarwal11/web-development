"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSavingsGoals, type SavingsGoal } from "@/hooks/use-savings-goals"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { PiggyBank, Trash2, PlusCircle, Edit } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function GoalsPage() {
  const { goals, addGoal, updateGoal, deleteGoal } = useSavingsGoals()
  const [name, setName] = useState("")
  const [targetAmount, setTargetAmount] = useState("")
  const [currentAmount, setCurrentAmount] = useState("")
  const [deadline, setDeadline] = useState("")
  const [description, setDescription] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingGoal, setEditingGoal] = useState<SavingsGoal | null>(null)
  const [depositAmount, setDepositAmount] = useState("")
  const [depositGoalId, setDepositGoalId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const resetForm = () => {
    setName("")
    setTargetAmount("")
    setCurrentAmount("")
    setDeadline("")
    setDescription("")
    setEditingGoal(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !targetAmount) return

    if (editingGoal) {
      updateGoal(editingGoal.id, {
        name,
        targetAmount: Number.parseFloat(targetAmount),
        currentAmount: Number.parseFloat(currentAmount) || 0,
        deadline,
        description,
      })
    } else {
      addGoal({
        name,
        targetAmount: Number.parseFloat(targetAmount),
        currentAmount: Number.parseFloat(currentAmount) || 0,
        deadline,
        description,
      })
    }

    resetForm()
    setIsAddDialogOpen(false)
  }

  const handleEditGoal = (goal: SavingsGoal) => {
    setEditingGoal(goal)
    setName(goal.name)
    setTargetAmount(goal.targetAmount.toString())
    setCurrentAmount(goal.currentAmount.toString())
    setDeadline(goal.deadline || "")
    setDescription(goal.description || "")
    setIsAddDialogOpen(true)
  }

  const handleDeposit = (goalId: string) => {
    if (!depositAmount || Number.parseFloat(depositAmount) <= 0) return

    const goal = goals.find((g) => g.id === goalId)
    if (!goal) return

    const newAmount = goal.currentAmount + Number.parseFloat(depositAmount)
    updateGoal(goalId, { currentAmount: newAmount })
    setDepositAmount("")
    setDepositGoalId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Savings Goals</h1>
          <p className="text-muted-foreground">Set and track your financial goals</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add New Goal
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingGoal ? "Edit Goal" : "Add New Savings Goal"}</DialogTitle>
              <DialogDescription>
                {editingGoal
                  ? "Update your savings goal details below."
                  : "Create a new savings goal to track your progress."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Goal Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., New Car, Vacation"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAmount">Target Amount ($)</Label>
                <Input
                  id="targetAmount"
                  type="number"
                  step="0.01"
                  min="0.01"
                  placeholder="0.00"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentAmount">Current Amount ($)</Label>
                <Input
                  id="currentAmount"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  value={currentAmount}
                  onChange={(e) => setCurrentAmount(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Target Date (Optional)</Label>
                <Input id="deadline" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Add details about your goal..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    resetForm()
                    setIsAddDialogOpen(false)
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit">{editingGoal ? "Update Goal" : "Create Goal"}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {goals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <Card key={goal.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{goal.name}</CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => handleEditGoal(goal)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => deleteGoal(goal.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {goal.description && <CardDescription>{goal.description}</CardDescription>}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">
                        {Math.round((goal.currentAmount / goal.targetAmount) * 100)}%
                      </span>
                    </div>
                    <Progress value={(goal.currentAmount / goal.targetAmount) * 100} className="h-2" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="font-medium">${goal.currentAmount.toFixed(2)}</div>
                      <div className="text-muted-foreground">Current</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${goal.targetAmount.toFixed(2)}</div>
                      <div className="text-muted-foreground">Target</div>
                    </div>
                  </div>
                  {goal.deadline && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Deadline: </span>
                      <span>{new Date(goal.deadline).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                {depositGoalId === goal.id ? (
                  <div className="flex w-full gap-2">
                    <Input
                      type="number"
                      step="0.01"
                      min="0.01"
                      placeholder="Amount"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                    />
                    <Button size="sm" onClick={() => handleDeposit(goal.id)}>
                      Add
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setDepositGoalId(null)}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" className="w-full" onClick={() => setDepositGoalId(goal.id)}>
                    <PiggyBank className="h-4 w-4 mr-2" />
                    Add Deposit
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <PiggyBank className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No savings goals yet</h3>
            <p className="text-muted-foreground text-center mb-4">
              Create your first savings goal to start tracking your progress towards financial freedom.
            </p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Your First Goal
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
