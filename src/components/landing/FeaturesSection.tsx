
import { BarChart3, BookOpen, FileText, GraduationCap, PieChart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: FileText,
    title: "AI Resume Builder",
    description:
      "Create professional, ATS-optimized resumes with intelligent suggestions and industry-specific templates.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: BarChart3,
    title: "Job Market Analytics",
    description:
      "Access real-time insights into job market trends, salary ranges, and skill demands in your field.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Users,
    title: "Mentor Network",
    description:
      "Connect with industry professionals for personalized guidance and career development support.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: BookOpen,
    title: "Personalized Learning",
    description:
      "Receive tailored recommendations for courses, workshops, and resources based on your career goals.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Career Roadmaps",
    description:
      "Visualize your career path with customized step-by-step guides to achieve your professional goals.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: PieChart,
    title: "Skills Assessment",
    description:
      "Identify skill gaps and strengths with comprehensive assessments and progress tracking tools.",
    color: "bg-teal-500/10 text-teal-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Comprehensive Tools for Career Success
          </h2>
          <p className="mt-4 text-xl text-muted-foreground mx-auto max-w-2xl">
            Everything you need to navigate your career journey, all in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md card-hover"
            >
              <div
                className={cn(
                  "mb-4 rounded-lg p-3",
                  feature.color
                )}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
