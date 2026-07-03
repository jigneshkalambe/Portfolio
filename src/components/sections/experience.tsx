import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/config/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Work Experience"
                    subtitle="My professional journey building production-grade applications."
                />
                <div className="space-y-8 max-w-4xl mx-auto">
                    {portfolioData.workExperience.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Line */}
                            <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/20 md:left-1/2 md:-ml-[1px]" />

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Left: Role Info */}
                                <div className="flex-1 md:text-right space-y-2">
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <p className="text-primary font-semibold">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                                    {exp.type && (
                                        <Badge variant="secondary" className="rounded-full text-xs">
                                            {exp.type}
                                        </Badge>
                                    )}
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-[-4px] top-2 h-3 w-3 rounded-full bg-primary md:static md:h-4 md:w-4 md:z-10 md:mt-1 shrink-0" />

                                {/* Right: Responsibilities */}
                                <Card className="flex-1 rounded-2xl border-primary/10">
                                    <CardContent className="pt-4">
                                        <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="text-sm leading-relaxed">
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="mt-16">
                    <SectionHeading title="Education" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {portfolioData.education.map((edu, index) => (
                            <Card key={index} className="rounded-2xl border-primary/10 hover:border-primary/30 transition-colors">
                                <CardContent className="pt-5 space-y-1">
                                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{edu.period}</p>
                                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                                    <p className="text-primary font-medium">{edu.institution}</p>
                                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                                    <Badge variant="secondary" className="rounded-full text-xs mt-1">
                                        {edu.credential}
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
