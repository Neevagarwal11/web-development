"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowDownIcon, ArrowUpIcon, BarChart3, PiggyBank, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useFinanceData } from "@/hooks/use-finance-data"
import { useSavingsGoals } from "@/hooks/use-savings-goals"

export default function Dashboard() {
  const { transactions, totalIncome, totalExpenses, balance } = useFinanceData()
  const { goals } = useSavingsGoals()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const recentTransactions = transactions.slice(0, 5)
  const topGoal = goals.length > 0 ? goals[0] : null

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Current Balance</CardTitle>
            <CardDescription>Your total financial balance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${balance.toFixed(2)}</div>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-1 text-sm">
                <ArrowUpIcon className="h-4 w-4 text-green-500" />
                <span className="text-muted-foreground">Income:</span>
                <span className="font-medium">${totalIncome.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <ArrowDownIcon className="h-4 w-4 text-red-500" />
                <span className="text-muted-foreground">Expenses:</span>
                <span className="font-medium">${totalExpenses.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Top Savings Goal</CardTitle>
            <CardDescription>Your primary financial goal</CardDescription>
          </CardHeader>
          <CardContent>
            {topGoal ? (
              <>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{topGoal.name}</span>
                  <span className="text-sm text-muted-foreground">
                    ${topGoal.currentAmount.toFixed(2)} / ${topGoal.targetAmount.toFixed(2)}
                  </span>
                </div>
                <Progress value={(topGoal.currentAmount / topGoal.targetAmount) * 100} className="h-2" />
                <div className="mt-4 text-sm text-muted-foreground">
                  {Math.round((topGoal.currentAmount / topGoal.targetAmount) * 100)}% complete
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-2">No savings goals yet</p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/goals">Create a goal</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
            <CardDescription>Your latest income and expenses</CardDescription>
          </CardHeader>
          <CardContent>
            {recentTransactions.length > 0 ? (
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{transaction.description}</div>
                      <div className="text-sm text-muted-foreground">{transaction.date}</div>
                    </div>
                    <div className={`font-medium ${transaction.type === "income" ? "text-green-500" : "text-red-500"}`}>
                      {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
                <Button asChild variant="outline" className="w-full mt-2">
                  <Link href="/tracker">View all transactions</Link>
                </Button>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-2">No transactions yet</p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/tracker">Add a transaction</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common finance tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/tracker" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Add Transaction
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/goals" className="flex items-center gap-2">
                <PiggyBank className="h-4 w-4" />
                Update Savings Goal
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/chatbot" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Ask Finance Question
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
