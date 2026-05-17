import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { portfolioData } from "@/config/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title="Featured Projects" subtitle="A selection of my recent work, focusing on performance, scalability, and user experience." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.projects.map((project) => (
                        <Card key={project.title} className="group overflow-hidden rounded-3xl border-none shadow-lg transition-all hover:shadow-xl dark:bg-card/50 py-0 flex flex-col h-full gap-0">
                            <div className="aspect-video w-full bg-muted relative overflow-hidden ">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-4 p-6 flex-1">
                                <div className="space-y-2">
                                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                                    <CardDescription className="text-base line-clamp-2">{project.description}</CardDescription>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <Badge key={t} variant="outline" className="rounded-full bg-background/50">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-6 bg-background/50 mt-auto border-t">
                                <Button asChild size="lg" className="rounded-full px-4">
                                    <Link href={project.link} target="_blank">
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </Link>
                                </Button>
                                {/* <Button asChild variant="outline" size="sm" className="rounded-full">
                                    <Link href="#" target="_blank">
                                        <GitHubIcon className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                </Button> */}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
