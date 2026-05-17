import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/config/portfolio";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="About Me" />
        <div className="max-w-3xl space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {portfolioData.about}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-4 rounded-xl bg-background border shadow-sm">
              <h4 className="font-bold mb-1">Current Role</h4>
              <p className="text-muted-foreground">{portfolioData.currentCompany} — Full Stack Developer</p>
            </div>
            <div className="p-4 rounded-xl bg-background border shadow-sm">
              <h4 className="font-bold mb-1">Location</h4>
              <p className="text-muted-foreground">{portfolioData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
