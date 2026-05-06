"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth-context"
import { Wallet, TrendingUp, ArrowDownToLine, Clock, CheckCircle, XCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WalletData {
  balance: number
  totalEarned: number
  totalWithdrawn: number
}

interface Transaction {
  id: string
  type: string
  amount: number
  status: string
  description: string
  createdAt: string
}

export function WalletComponent() {
  const { user } = useAuth()
  const [wallet] = useState<WalletData>({
    balance: 125000,
    totalEarned: 350000,
    totalWithdrawn: 225000,
  })
  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "earning",
      amount: 50000,
      status: "completed",
      description: "Payment from Project X",
      createdAt: "2024-05-01",
    },
    {
      id: "2",
      type: "withdrawal",
      amount: 30000,
      status: "completed",
      description: "Withdrawal to Bank Account",
      createdAt: "2024-04-28",
    },
    {
      id: "3",
      type: "earning",
      amount: 75000,
      status: "completed",
      description: "Payment from Mobile App Dev",
      createdAt: "2024-04-20",
    },
    {
      id: "4",
      type: "earning",
      amount: 100000,
      status: "completed",
      description: "Payment from Website Redesign",
      createdAt: "2024-04-10",
    },
    {
      id: "5",
      type: "withdrawal",
      amount: 95000,
      status: "completed",
      description: "Withdrawal to Bank Account",
      createdAt: "2024-03-25",
    },
  ])
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [withdrawMethod, setWithdrawMethod] = useState("")

  const handleWithdraw = () => {
    if (!withdrawAmount || !withdrawMethod) return

    const amount = Number.parseFloat(withdrawAmount)
    if (amount <= 0 || amount > wallet.balance) {
      alert("Invalid withdrawal amount")
      return
    }

    alert("Withdrawal request submitted successfully!")
    setWithdrawAmount("")
    setWithdrawMethod("")
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "earning":
        return "bg-green-500/10 text-green-700 dark:text-green-300"
      case "withdrawal":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-300"
      case "refund":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-300"
      case "payment":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-300"
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">My Wallet</h1>
        <p className="text-muted-foreground">Manage your earnings and withdrawals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Available Balance</p>
            </div>
            <p className="text-3xl font-bold text-foreground">${wallet?.balance.toFixed(2) || "0.00"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-green-500/10">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-sm text-muted-foreground">Total Earned</p>
            </div>
            <p className="text-3xl font-bold text-foreground">${wallet?.totalEarned.toFixed(2) || "0.00"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <ArrowDownToLine className="h-5 w-5 text-blue-500" />
              </div>
              <p className="text-sm text-muted-foreground">Total Withdrawn</p>
            </div>
            <p className="text-3xl font-bold text-foreground">${wallet?.totalWithdrawn.toFixed(2) || "0.00"}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Withdraw Funds</CardTitle>
              <CardDescription>Transfer your earnings to your preferred payment method</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <ArrowDownToLine className="mr-2 h-4 w-4" />
                  Withdraw
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Withdraw Funds</DialogTitle>
                  <DialogDescription>Available balance: ${wallet?.balance.toFixed(2) || "0.00"}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      max={wallet?.balance || 0}
                      min={0}
                      step="0.01"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="method">Withdrawal Method</Label>
                    <Select value={withdrawMethod} onValueChange={setWithdrawMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank_account">Bank Account</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="stripe">Stripe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleWithdraw} className="w-full">
                    Submit Withdrawal Request
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="earning">Earnings</TabsTrigger>
              <TabsTrigger value="withdrawal">Withdrawals</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-3">
              {transactions.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No transactions yet</p>
                </div>
              ) : (
                transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(transaction.status)}
                      <div>
                        <p className="font-medium text-foreground">{transaction.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getTypeColor(transaction.type)} variant="outline">
                            {transaction.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{transaction.createdAt}</span>
                        </div>
                      </div>
                    </div>
                    <p
                      className={`text-lg font-semibold ${
                        transaction.type === "earning" ? "text-green-600" : "text-foreground"
                      }`}
                    >
                      {transaction.type === "earning" ? "+" : "-"}${transaction.amount.toFixed(2)}
                    </p>
                  </div>
                ))
              )}
            </TabsContent>
            <TabsContent value="earning" className="space-y-3">
              {transactions
                .filter((t) => t.type === "earning")
                .map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(transaction.status)}
                      <div>
                        <p className="font-medium text-foreground">{transaction.description}</p>
                        <span className="text-xs text-muted-foreground">{transaction.createdAt}</span>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-green-600">+${transaction.amount.toFixed(2)}</p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="withdrawal" className="space-y-3">
              {transactions
                .filter((t) => t.type === "withdrawal")
                .map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(transaction.status)}
                      <div>
                        <p className="font-medium text-foreground">{transaction.description}</p>
                        <span className="text-xs text-muted-foreground">{transaction.createdAt}</span>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-foreground">-${transaction.amount.toFixed(2)}</p>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
