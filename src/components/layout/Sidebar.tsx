import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
import { Button } from "../ui/button";


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
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Send, label: "Telegram" },
];


export function Sidebar({ isMobile = false }: { isMobile?: boolean }) {
    
    const sidebarContent = (
      <>
        <div className="flex flex-col gap-2 p-4">
            {mainNav.map((item, index) => (
                <Button key={item.label} asChild variant={index === 0 ? "secondary" : "ghost"} className="justify-start gap-3 text-base h-11">
                    <Link href={item.href} >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                    </Link>
                </Button>
            ))}
        </div>
        
        <div className="flex-1 overflow-y-auto px-4">
              <Accordion type="multiple" className="w-full">
                {toolCategories.map((category) => (
                    <AccordionItem key={category.title} value={category.title} className="border-none">
                        <AccordionTrigger className="text-base py-3 px-3 rounded-md hover:bg-muted hover:no-underline text-foreground">
                            <div className="flex items-center gap-3">
                                <category.icon className="h-5 w-5" />
                                <span>{category.title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-1 pl-11 py-1">
                                  {category.links.map(link => (
                                      <Link key={link.label} href={link.href} className="text-sm py-1.5 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
                                        {link.label}
                                      </Link>
                                  ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        
        <div className="mt-auto flex flex-col gap-2 p-4">
            <p className="text-sm font-medium text-muted-foreground px-3">Connect</p>
            {socialLinks.map((item) => (
                 <Button key={item.label} asChild variant="ghost" className="justify-start gap-3 text-base h-11">
                    <Link href={item.href}>
                        <item.icon className="h-5 w-5" />
                        {item.label}
                    </Link>
                </Button>
            ))}
        </div>
      </>
    );

    if (isMobile) {
        return <div className="flex flex-col h-full">{sidebarContent}</div>;
    }
    
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-72 flex-col border-r bg-card sm:flex">
            <div className="flex items-center h-16 border-b px-6">
                <Logo />
            </div>
            <div className="flex flex-col h-[calc(100vh-4rem)]">
              {sidebarContent}
            </div>
        </aside>
    )
}
