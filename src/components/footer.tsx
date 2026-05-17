import { portfolioData } from "@/config/portfolio";
import { Globe } from "lucide-react";
import Link from "next/link";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="text-center md:text-left space-y-2">
                        <h3 className="text-lg font-bold">{portfolioData.name}</h3>
                        <p className="text-sm text-muted-foreground">© {currentYear} All rights reserved.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href={portfolioData.contact.linkedin} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors">
                            <LinkedInIcon className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href={portfolioData.contact.github} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors">
                            <GitHubIcon className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        {/* <Link href="#" target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors">
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Website</span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
