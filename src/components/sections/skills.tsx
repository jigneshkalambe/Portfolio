import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/config/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categoryIcons: Record<string, string> = {
    "Frontend": "🖥️",
    "Backend": "⚙️",
    "Database": "🗄️",
    "Performance & SEO": "🚀",
    "DevOps & CI/CD": "🔧",
    "Specialized": "🌐",
    "AI & Productivity": "🤖",
    "Tools": "🛠️",
};

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Skills & Expertise"
                    subtitle="A comprehensive toolkit built from 1.5+ years of production development."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioData.skills.map((skillGroup) => (
                        <Card
                            key={skillGroup.category}
                            className="rounded-2xl border-primary/10 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                        >
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base font-bold flex items-center gap-2">
                                    <span>{categoryIcons[skillGroup.category] ?? "📌"}</span>
                                    {skillGroup.category}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="rounded-md px-2 py-1 text-xs font-medium"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
