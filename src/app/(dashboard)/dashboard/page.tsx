import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle, Clock, DollarSign, Users, Target } from "lucide-react"
import { userStats, earningLedger } from "@/lib/placeholder-data"
import Link from "next/link"

const statCards = [
    { title: "Current Balance", value: `$${userStats.balance.toFixed(2)}`, icon: DollarSign, description: "+20.1% from last month" },
    { title: "Directs", value: userStats.directs, icon: Users, description: "+2 new members this week" },
    { title: "Total Team", value: Object.values(userStats.team).reduce((a, b) => a + b, 0), icon: Target, description: "Across 5 levels" },
    { title: "Ad Status", value: userStats.adStatus, icon: userStats.adStatus === 'completed' ? CheckCircle : Clock, description: "View today's ad to earn" },
]

export default function DashboardPage() {
    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                {statCards.map(card => (
                    <Card key={card.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                            <card.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {card.title === "Ad Status" ? (
                                    <Badge variant={card.value === 'completed' ? "default" : "secondary"} className={card.value === 'completed' ? 'bg-green-500/20 text-green-700' : 'bg-yellow-500/20 text-yellow-700'}>
                                        {card.value.charAt(0).toUpperCase() + card.value.slice(1)}
                                    </Badge>
                                ) : (
                                    card.value
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card className="xl:col-span-2">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Earning Ledger</CardTitle>
                            <CardDescription>Recent transactions from your account.</CardDescription>
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
                <Card>
                    <CardHeader>
                        <CardTitle>Team Overview</CardTitle>
                        <CardDescription>Your network growth at a glance.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        {Object.entries(userStats.team).map(([level, count]) => (
                             <div key={level} className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Level {level.replace('level', '')}
                                </span>
                                <span className="font-medium">{count} members</span>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                       <Button asChild className="w-full">
                           <Link href="/dashboard/team">Manage Team</Link>
                       </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
