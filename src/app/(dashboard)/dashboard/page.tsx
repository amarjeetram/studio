import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle, Clock, DollarSign, Users, Target, Eye, Send } from "lucide-react"
import { userStats, earningLedger } from "@/lib/placeholder-data"
import Link from "next/link"
import { EarningsChart } from "@/components/dashboard/EarningsChart"

const quickActions = [
    { title: "View Daily Ad", href: "/dashboard/ad-view", icon: Eye },
    { title: "Manage Team", href: "/dashboard/team", icon: Users },
    { title: "Claim Telegram Bonus", href: "/dashboard/telegram", icon: Send },
]

export default function DashboardPage() {
    return (
        <div className="grid gap-4 md:gap-8 auto-rows-max">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${userStats.balance.toFixed(2)}</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Directs</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{userStats.directs}</div>
                        <p className="text-xs text-muted-foreground">+2 new members this week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Team</CardTitle>
                        <Target className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{Object.values(userStats.team).reduce((a, b) => a + b, 0)}</div>
                        <p className="text-xs text-muted-foreground">Across 5 levels</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ad Status</CardTitle>
                        {userStats.adStatus === 'completed' ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Clock className="h-4 w-4 text-yellow-500" />}
                    </CardHeader>
                    <CardContent>
                         <Badge variant={userStats.adStatus === 'completed' ? 'default' : 'secondary'} className={userStats.adStatus === 'completed' ? 'bg-green-500/20 text-green-700' : 'bg-yellow-500/20 text-yellow-700'}>
                                {userStats.adStatus.charAt(0).toUpperCase() + userStats.adStatus.slice(1)}
                         </Badge>
                        <p className="text-xs text-muted-foreground">View today's ad to earn</p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                   <CardHeader>
                       <CardTitle>Earnings Overview</CardTitle>
                       <CardDescription>Your earnings over the last 7 days.</CardDescription>
                   </CardHeader>
                   <CardContent>
                       <EarningsChart />
                   </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Your most common tasks.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                        {quickActions.map(action => (
                            <Button asChild key={action.title} variant="outline" className="justify-start">
                               <Link href={action.href}>
                                  <action.icon className="mr-2 h-4 w-4" />
                                  {action.title}
                               </Link>
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            </div>
             <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Recent Transactions</CardTitle>
                        <CardDescription>Latest transactions from your account.</CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="#">
                            View All
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Transaction</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="hidden sm:table-cell">Status</TableHead>
                                <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {earningLedger.slice(0, 5).map(txn => (
                                <TableRow key={txn.id}>
                                    <TableCell>
                                        <div className="font-medium">{txn.type}</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            ID: {txn.id}
                                        </div>
                                    </TableCell>
                                    <TableCell className={`text-right font-medium ${txn.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {txn.amount > 0 ? `+$${txn.amount.toFixed(2)}` : `-$${Math.abs(txn.amount).toFixed(2)}`}
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant={txn.status === 'credited' ? 'default' : 'outline'}>
                                            {txn.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell text-right">
                                        {new Date(txn.date).toLocaleDateString()}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
