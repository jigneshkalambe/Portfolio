import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { portfolioData } from "@/config/portfolio";
import { Mail, FileText } from "lucide-react";
import Link from "next/link";
import { LinkedInIcon } from "@/components/icons";

export function Hero() {
    return (
        <section className="py-20 md:py-32 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
                    <div className="relative">
                        <Avatar className="h-32 w-32 border-2 border-primary/20 md:h-48 md:w-48">
                            <AvatarImage src="" alt={portfolioData.name} />
                            <AvatarFallback className="text-4xl">JK</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-green-500 border-4 border-background" title="Available for work" />
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{portfolioData.name}</h1>
                            <p className="text-xl font-medium text-primary md:text-2xl">{portfolioData.role}</p>
                        </div>

                        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">{portfolioData.intro}</p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button asChild size="lg" className="px-4 rounded-2xl">
                                <Link href="#contact">
                                    <Mail className=" h-4 w-4" />
                                    Contact Me
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="px-4 rounded-2xl">
                                <Link href={portfolioData.contact.linkedin} target="_blank">
                                    <LinkedInIcon className=" h-4 w-4" />
                                    LinkedIn
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="px-4 rounded-2xl">
                                <Link href="#" target="_blank">
                                    <FileText className=" h-4 w-4" />
                                    View Resume
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
