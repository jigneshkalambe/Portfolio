import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/config/portfolio";
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title="Work Experience" />
                <div className="space-y-8">
                    {portfolioData.workExperience.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Line */}
                            <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/20 md:left-1/2 md:-ml-[1px]" />

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1 md:text-right space-y-1">
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-[-4px] top-2 h-3 w-3 rounded-full bg-primary md:static md:h-4 md:w-4 md:z-10" />

                                <Card className="flex-1 rounded-2xl border-primary/10">
                                    <CardContent>
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
            </div>
        </section>
    );
}
