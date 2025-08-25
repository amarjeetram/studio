import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { adminDashboardData } from "@/lib/placeholder-data"
import { DollarSign, ShieldCheck, Users, Activity, CreditCard, CircleDollarSign } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminDashboardPage() {
    const stats = [
        { title: "Pending Payments", value: adminDashboardData.payments.filter(p => p.status === 'Pending').length, icon: CreditCard, href: "/admin/payments" },
        { title: "Pending KYC", value: adminDashboardData.kyc.filter(k => k.status === 'Pending').length, icon: ShieldCheck, href: "/admin/kyc" },
        { title: "Pending Withdrawals", value: adminDashboardData.withdrawals.filter(w => w.status === 'Pending').length, icon: CircleDollarSign, href: "/admin/withdrawals" },
        { title: "Total Users", value: 2450, icon: Users, href: "#" },
    ]
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 font-headline">Admin Dashboard</h1>
             <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                {stats.map(stat => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                             <Button variant="link" asChild className="p-0 h-auto text-xs text-muted-foreground">
                                <Link href={stat.href}>View Details</Link>
                             </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {/* More components like charts can be added here */}
        </div>
    )
}
