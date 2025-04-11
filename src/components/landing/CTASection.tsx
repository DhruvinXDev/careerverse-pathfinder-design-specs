
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const features = [
  "Personalized career guidance",
  "AI-powered resume builder",
  "Expert mentorship network",
  "Skill development resources",
  "Job market analytics",
  "Interview preparation",
];

export function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-career-600 to-career-900 opacity-95"></div>
      <div className="relative container px-4 md:px-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl mb-4">
              Ready to Accelerate Your Career Journey?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-md">
              Join CareerVerse today and access all the tools, resources, and
              connections you need to succeed in your professional path.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-career-700 hover:bg-white/90" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
            <div className="text-xl font-bold mb-4">Choose Your Path</div>
            
            <div className="space-y-4">
              <div className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-6 cursor-pointer">
                <div className="font-bold mb-2">Students & Graduates</div>
                <p className="text-sm text-white/80 mb-4">
                  Launch your career with guidance, skills development, and networking
                </p>
                <Button variant="link" className="p-0 h-auto text-white">Learn more →</Button>
              </div>
              
              <div className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-6 cursor-pointer">
                <div className="font-bold mb-2">Career Changers</div>
                <p className="text-sm text-white/80 mb-4">
                  Transition smoothly with personalized roadmaps and targeted skill building
                </p>
                <Button variant="link" className="p-0 h-auto text-white">Learn more →</Button>
              </div>
              
              <div className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-6 cursor-pointer">
                <div className="font-bold mb-2">Mentors & Professionals</div>
                <p className="text-sm text-white/80 mb-4">
                  Share your expertise, grow your network, and make a difference
                </p>
                <Button variant="link" className="p-0 h-auto text-white">Learn more →</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
