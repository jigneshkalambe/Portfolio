import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/config/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { LinkedInIcon } from "@/components/icons";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading title="Get In Touch" align="center" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="rounded-2xl border-none shadow-sm text-center transition-all hover:shadow-md">
                            <CardContent className="pt-2 space-y-4">
                                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold">Email</h4>
                                    <p className="text-sm text-muted-foreground">{portfolioData.contact.email}</p>
                                </div>
                                <Button asChild variant="link" size="sm">
                                    <Link href={`mailto:${portfolioData.contact.email}`}>Send Email</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl border-none shadow-sm text-center transition-all hover:shadow-md">
                            <CardContent className="pt-2 space-y-4">
                                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <LinkedInIcon className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold">LinkedIn</h4>
                                    <p className="text-sm text-muted-foreground">Jignesh Kalambe</p>
                                </div>
                                <Button asChild variant="link" size="sm">
                                    <Link href={portfolioData.contact.linkedin} target="_blank">
                                        View Profile
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl border-none shadow-sm text-center transition-all hover:shadow-md">
                            <CardContent className="pt-2 space-y-4">
                                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold">Location</h4>
                                    <p className="text-sm text-muted-foreground">{portfolioData.contact.location}</p>
                                </div>
                                <p className="text-sm font-medium text-primary">Available for Remote / Hybrid</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
