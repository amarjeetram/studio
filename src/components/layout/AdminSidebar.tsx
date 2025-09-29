import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    ShieldCheck,
    CircleDollarSign,
    CreditCard
} from 'lucide-react';


const navItems = [
    { href: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/payments", icon: CreditCard, label: "Payments" },
    { href: "/admin/kyc", icon: ShieldCheck, label: "KYC" },
    { href: "/admin/withdrawals", icon: CircleDollarSign, label: "Withdrawals" },
    { href: "/admin/settings", icon: Settings, label: "Settings" },
];

const bottomNavItems = [
    // { href: "/login", icon: LogOut, label: "Logout" },
];

export function AdminSidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <TooltipProvider>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="/admin/dashboard"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <ShieldCheck className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Admin</span>
                </Link>

                {navItems.map((item) => (
                    <Tooltip key={item.label}>
                        <TooltipTrigger asChild>
                            <Link
                                href={item.href}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <item.icon className="h-5 w-5" />
                                <span className="sr-only">{item.label}</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.label}</TooltipContent>
                    </Tooltip>
                ))}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                {bottomNavItems.map((item) => (
                     <Tooltip key={item.label}>
                        <TooltipTrigger asChild>
                            <Link
                                href={item.href}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <item.icon className="h-5 w-5" />
                                <span className="sr-only">{item.label}</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.label}</TooltipContent>
                    </Tooltip>
                ))}
            </nav>
             </TooltipProvider>
        </aside>
    )
}
