import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
    Home,
    CircleUser,
    DollarSign,
    GitCommit,
    Lightbulb,
    Bot,
    ImageIcon,
    FileText,
    Code,
    SearchCheck,
    Minimize,
    Wrench,
    Film,
    Github,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    Send
} from 'lucide-react';
import { Logo } from "../icons/Logo";
import { cn } from "@/lib/utils";


const mainNav = [
    { href: "#", icon: Home, label: "Home" },
    { href: "#", icon: CircleUser, label: "My Account" },
    { href: "#", icon: DollarSign, label: "Pricing" },
    { href: "#", icon: Lightbulb, label: "Upcoming Tools" },
]

const toolCategories = [
    { 
        title: "AI Tools", 
        icon: Bot, 
        links: [
            { href: "#", label: "AI Writer" },
            { href: "#", label: "AI Image Generator" },
        ]
    },
    { 
        title: "Image Tools", 
        icon: ImageIcon,
        links: [
            { href: "#", label: "Image Resizer" },
            { href: "#", label: "Image Converter" },
        ]
    },
    { 
        title: "PDF Tools", 
        icon: FileText,
        links: [
            { href: "#", label: "PDF to Word" },
            { href: "#", label: "Merge PDF" },
        ]
    },
     { 
        title: "Convert Tools", 
        icon: GitCommit,
        links: [
            { href: "#", label: "JSON to CSV" },
            { href: "#", label: "XML to JSON" },
        ]
    },
    { 
        title: "Developer Tools", 
        icon: Code,
        links: [
            { href: "#", label: "Code Formatter" },
            { href: "#", label: "JWT Debugger" },
        ]
    },
    { 
        title: "SEO & Blogging", 
        icon: SearchCheck,
        links: [
            { href: "#", label: "Meta Tag Generator" },
            { href: "#", label: "Keyword Finder" },
        ]
    },
    { 
        title: "Compress Tools", 
        icon: Minimize,
        links: [
            { href: "#", label: "Image Compressor" },
            { href: "#", label: "Video Compressor" },
        ]
    },
    { 
        title: "Utility Tools", 
        icon: Wrench,
        links: [
            { href: "#", label: "Password Generator" },
            { href: "#", label: "Unit Converter" },
        ]
    },
     { 
        title: "Entertainment Tools", 
        icon: Film,
        links: [
            { href: "#", label: "Meme Generator" },
            { href: "#", label: "Random Name Picker" },
        ]
    },
]

const socialLinks = [
    { href: "#", icon: Github, label: "GitHub" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", next: true, icon: Instagram, label: "Instagram" },
    { href: "#", icon: Send, label: "Telegram" },
];


export function Sidebar({ isMobile = false }: { isMobile?: boolean }) {
    
    const sidebarContent = (
        <TooltipProvider>
            {!isMobile && (
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Code className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">SmartToolsWala</span>
                    </Link>

                    {mainNav.map((item) => (
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
            )}
            
            {isMobile && (
                 <div className="flex flex-col gap-4 px-4 py-2">
                    {mainNav.map((item) => (
                         <Link key={item.label} href={item.href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
            
            <div className="flex-1 overflow-y-auto px-2 mt-4">
                 <Accordion type="multiple" className="w-full">
                    {toolCategories.map((category) => (
                        <AccordionItem key={category.title} value={category.title} className="border-none">
                            <AccordionTrigger className="text-sm py-2 px-2 rounded-md hover:bg-muted/50 hover:no-underline text-muted-foreground data-[state=open]:text-foreground data-[state=open]:font-semibold">
                                <div className="flex items-center gap-3">
                                    <category.icon className={cn("h-4 w-4", isMobile && "h-5 w-5")} />
                                    {isMobile && <span>{category.title}</span>}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className={cn("flex flex-col gap-1 pl-6", isMobile && "pl-10")}>
                                     {category.links.map(link => (
                                         <Link key={link.label} href={link.href} className="text-xs py-1 text-muted-foreground hover:text-foreground">
                                            {link.label}
                                         </Link>
                                     ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            
            <nav className={cn("flex flex-col items-center gap-2 px-2 mt-auto py-5", isMobile && "flex-row flex-wrap justify-center px-4")}>
                {socialLinks.map((item) => (
                     <Tooltip key={item.label}>
                        <TooltipTrigger asChild>
                            <Link
                                href={item.href}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <item.icon className="h-4 w-4" />
                                <span className="sr-only">{item.label}</span>
                            </Link>
                        </TooltipTrigger>
                        {!isMobile && <TooltipContent side="right">{item.label}</TooltipContent>}
                    </Tooltip>
                ))}
            </nav>
        </TooltipProvider>
    );

    if (isMobile) {
        return sidebarContent;
    }
    
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            {sidebarContent}
        </aside>
    )
}
