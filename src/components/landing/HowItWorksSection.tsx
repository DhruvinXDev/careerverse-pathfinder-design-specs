
import { CheckCircle2, ChevronRight, FileText, LucideIcon, Network, PenTool, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    icon: User,
    title: "Create Your Profile",
    description: "Sign up and complete your profile with details about your education, skills, and career goals.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: FileText,
    title: "Build Your Resume",
    description: "Use our AI-powered tools to create a professional resume that highlights your strengths and achievements.",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
  {
    icon: PenTool,
    title: "Enhance Your Skills",
    description: "Access personalized learning resources and develop the skills needed for your desired career path.",
    color: "bg-green-500/10 text-green-500 border-green-500/20",
  },
  {
    icon: Network,
    title: "Connect & Grow",
    description: "Network with professionals, find mentors, and discover opportunities that align with your goals.",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            How CareerVerse Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground mx-auto max-w-2xl">
            Your journey to career success in four simple steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div
                className={cn(
                  "rounded-lg border p-6 h-full flex flex-col card-hover",
                  step.color
                )}
              >
                <div
                  className={cn(
                    "rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4",
                    step.color.split(" ")[0]
                  )}
                >
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-career-600 text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ChevronRight className="h-8 w-8 text-muted-foreground/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-lg bg-career-50 dark:bg-gray-900">
            <CheckCircle2 className="h-5 w-5 text-career-500 mr-2" />
            <span className="text-sm font-medium">
              Join thousands of students and professionals advancing their careers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
