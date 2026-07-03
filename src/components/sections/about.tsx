import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/config/portfolio";

const stats = [
    { label: "Years Experience", value: "1.5+" },
    { label: "Production Platforms", value: "4+" },
    { label: "Daily Active Users", value: "1K+" },
    { label: "Languages Supported", value: "12" },
];

export function About() {
    return (
        <section id="about" className="py-20 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title="About Me" />
                <div className="max-w-5xl space-y-10">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        {portfolioData.about}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="p-5 rounded-2xl bg-background border shadow-sm text-center space-y-1 hover:border-primary/30 transition-colors"
                            >
                                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-background border shadow-sm">
                            <h4 className="font-bold mb-1">Current Role</h4>
                            <p className="text-muted-foreground">{portfolioData.currentCompany} — Full Stack Developer</p>
                        </div>
                        <div className="p-4 rounded-xl bg-background border shadow-sm">
                            <h4 className="font-bold mb-1">Location</h4>
                            <p className="text-muted-foreground">{portfolioData.location}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-background border shadow-sm">
                            <h4 className="font-bold mb-1">Availability</h4>
                            <p className="text-green-500 font-medium">Open to Opportunities</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
