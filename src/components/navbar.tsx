"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);

            const sections = ["about", "skills", "projects", "experience", "contact"];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 120 && rect.bottom >= 120;
                }
                return false;
            });
            if (current) {
                setActiveSection(current);
            } else if (window.scrollY < 100) {
                setActiveSection("");
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn("sticky top-0 z-50 w-full transition-all duration-300", isScrolled ? "border-b bg-background/80 backdrop-blur-md" : "bg-transparent")}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    JK<span className="text-primary">.</span>
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-52 p-2">
                            {navItems.map((item) => (
                                <DropdownMenuItem key={item.name} asChild className={cn("py-2.5 px-4 cursor-pointer rounded-md transition-colors", activeSection === item.href.slice(1) && "bg-accent text-accent-foreground font-medium")}>
                                    <Link href={item.href} className="w-full">
                                        {item.name}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
