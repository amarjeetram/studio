import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
    LayoutDashboard,
    Eye,
    Users,
    Wallet,
    Bell,
    Settings,
    LifeBuoy,
    LogOut,
    Send
} from 'lucide-react';
import { Logo } from "../icons/Logo";


const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/ad-view", icon: Eye, label: "Ad View" },
    { href: "/team", icon: Users, label: "My Team" },
    { href: "/telegram", icon: Send, label: "Telegram Bonus" },
];

const bottomNavItems = [
    { href: "#", icon: LifeBuoy, label: "Support" },
    // { href: "/login", icon: LogOut, label: "Logout" },
];


export function AppSidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <TooltipProvider>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="/dashboard"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 transition-all group-hover:scale-110"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="sr-only">StarRise Network</span>
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
