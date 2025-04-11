
import { BarChart3, BookOpen, FileText, GraduationCap, PieChart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: FileText,
    title: "AI Resume Builder",
    description:
      "Create professional, ATS-optimized resumes with intelligent suggestions and industry-specific templates.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    hoverColor: "group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    icon: BarChart3,
    title: "Job Market Analytics",
    description:
      "Access real-time insights into job market trends, salary ranges, and skill demands in your field.",
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    hoverColor: "group-hover:bg-green-500 group-hover:text-white",
  },
  {
    icon: Users,
    title: "Mentor Network",
    description:
      "Connect with industry professionals for personalized guidance and career development support.",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    hoverColor: "group-hover:bg-purple-500 group-hover:text-white",
  },
  {
    icon: BookOpen,
    title: "Personalized Learning",
    description:
      "Receive tailored recommendations for courses, workshops, and resources based on your career goals.",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    hoverColor: "group-hover:bg-orange-500 group-hover:text-white",
  },
  {
    icon: GraduationCap,
    title: "Career Roadmaps",
    description:
      "Visualize your career path with customized step-by-step guides to achieve your professional goals.",
    color: "bg-red-500/10 text-red-500 border-red-500/20",
    hoverColor: "group-hover:bg-red-500 group-hover:text-white",
  },
  {
    icon: PieChart,
    title: "Skills Assessment",
    description:
      "Identify skill gaps and strengths with comprehensive assessments and progress tracking tools.",
    color: "bg-teal-500/10 text-teal-500 border-teal-500/20",
    hoverColor: "group-hover:bg-teal-500 group-hover:text-white",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/30 dark:to-secondary/10 pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Comprehensive Tools for <span className="gradient-heading">Career Success</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground mx-auto max-w-2xl">
            Everything you need to navigate your career journey, all in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full items-start p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden shine-card"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full"></div>
              <div
                className={cn(
                  "mb-5 rounded-lg p-3 transition-colors duration-300",
                  feature.color,
                  feature.hoverColor
                )}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="mt-auto pt-4">
                <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Learn more
                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
