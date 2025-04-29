"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useFinanceData } from "@/hooks/use-finance-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownIcon, ArrowUpIcon, Trash2 } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = {
  income: ["Salary", "Freelance", "Gifts", "Investments", "Other"],
  expense: ["Food", "Housing", "Transportation", "Entertainment", "Utilities", "Healthcare", "Shopping", "Other"],
}

export default function TrackerPage() {
  const { transactions, addTransaction, deleteTransaction, totalIncome, totalExpenses, balance } = useFinanceData()
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [type, setType] = useState<"income" | "expense">("expense")
  const [filter, setFilter] = useState("all")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!description || !amount || !category) return

    addTransaction({
      type,
      amount: Number.parseFloat(amount),
      description,
      category,
      date: new Date().toLocaleDateString(),
    })

    // Reset form
    setDescription("")
    setAmount("")
    setCategory("")
  }

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true
    return transaction.type === filter
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Income & Expense Tracker</CardTitle>
            <CardDescription>Track your financial transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground">Balance</div>
                  <div className="text-2xl font-bold">${balance.toFixed(2)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground">Income</div>
                  <div className="text-2xl font-bold text-green-500">${totalIncome.toFixed(2)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground">Expenses</div>
                  <div className="text-2xl font-bold text-red-500">${totalExpenses.toFixed(2)}</div>
                </CardContent>
              </Card>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Transaction Type</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={type === "income" ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => {
                      setType("income")
                      setCategory("")
                    }}
                  >
                    <ArrowUpIcon className="h-4 w-4 mr-2" />
                    Income
                  </Button>
                  <Button
                    type="button"
                    variant={type === "expense" ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => {
                      setType("expense")
                      setCategory("")
                    }}
                  >
                    <ArrowDownIcon className="h-4 w-4 mr-2" />
                    Expense
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="e.g., Grocery shopping"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  min="0.01"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories[type].map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">
                Add Transaction
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>View and manage your transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="mb-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all" onClick={() => setFilter("all")}>
                  All
                </TabsTrigger>
                <TabsTrigger value="income" onClick={() => setFilter("income")}>
                  Income
                </TabsTrigger>
                <TabsTrigger value="expense" onClick={() => setFilter("expense")}>
                  Expenses
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{transaction.description}</div>
                      <div className="text-sm text-muted-foreground">
                        {transaction.category} • {transaction.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-medium ${transaction.type === "income" ? "text-green-500" : "text-red-500"}`}
                      >
                        {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                      </span>
                      <Button variant="ghost" size="icon" onClick={() => deleteTransaction(transaction.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No transactions found. Add your first transaction above.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
