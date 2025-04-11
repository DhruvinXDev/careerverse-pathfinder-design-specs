
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BarChart2,
  CheckCircle2,
  Clock,
  FileText,
  GraduationCap,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardsProps {
  className?: string;
  userType?: "student" | "mentor" | "admin";
}

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary",
        positive: "bg-green-500/10 text-green-500",
        negative: "bg-red-500/10 text-red-500",
        neutral: "bg-gray-500/10 text-gray-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function StatsCards({ className, userType = "student" }: StatsCardsProps) {
  // Student-specific stats
  const studentStats = [
    {
      title: "Resume Score",
      value: "78/100",
      icon: FileText,
      label: "2 improvements suggested",
      trend: "+12%",
      trendDirection: "up",
      link: "/resume",
    },
    {
      title: "Skills Progress",
      value: "8/12",
      icon: CheckCircle2,
      label: "Core skills completed",
      trend: "+3",
      trendDirection: "up",
      link: "/learning",
    },
    {
      title: "Network Growth",
      value: "24",
      icon: Users,
      label: "Professional connections",
      trend: "+5",
      trendDirection: "up",
      link: "/networking",
    },
    {
      title: "Interview Prep",
      value: "60%",
      icon: Clock,
      label: "Readiness score",
      trend: "+15%",
      trendDirection: "up",
      link: "/interviews",
    },
  ];

  // Mentor-specific stats
  const mentorStats = [
    {
      title: "Active Mentees",
      value: "12",
      icon: Users,
      label: "Students being mentored",
      trend: "+3",
      trendDirection: "up",
      link: "/mentor/mentees",
    },
    {
      title: "Session Hours",
      value: "24",
      icon: Clock,
      label: "Hours this month",
      trend: "+8",
      trendDirection: "up",
      link: "/mentor/sessions",
    },
    {
      title: "Webinars Hosted",
      value: "3",
      icon: GraduationCap,
      label: "Total this quarter",
      trend: "+1",
      trendDirection: "up",
      link: "/webinars/my",
    },
    {
      title: "Feedback Score",
      value: "4.8/5",
      icon: BarChart2,
      label: "Average mentor rating",
      trend: "+0.2",
      trendDirection: "up",
      link: "/mentor/feedback",
    },
  ];

  // Admin-specific stats
  const adminStats = [
    {
      title: "Active Users",
      value: "1,248",
      icon: Users,
      label: "Total platform users",
      trend: "+126",
      trendDirection: "up",
      link: "/admin/users",
    },
    {
      title: "Mentor Applications",
      value: "16",
      icon: GraduationCap,
      label: "Awaiting verification",
      trend: "+5",
      trendDirection: "up",
      link: "/admin/mentors",
    },
    {
      title: "Support Tickets",
      value: "8",
      icon: CheckCircle2,
      label: "Open tickets",
      trend: "-2",
      trendDirection: "down",
      link: "/admin/support",
    },
    {
      title: "Platform Metrics",
      value: "92%",
      icon: BarChart2,
      label: "User satisfaction",
      trend: "+4%",
      trendDirection: "up",
      link: "/admin/metrics",
    },
  ];

  // Determine which stats to display based on userType
  const stats = 
    userType === "student" 
      ? studentStats 
      : userType === "mentor" 
      ? mentorStats 
      : adminStats;

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((stat, index) => (
        <Card key={index} className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <div
                className={cn(
                  badgeVariants({
                    variant:
                      stat.trendDirection === "up"
                        ? "positive"
                        : stat.trendDirection === "down"
                        ? "negative"
                        : "neutral",
                  })
                )}
              >
                {stat.trend}
              </div>
            </div>
            <Link
              to={stat.link}
              className="mt-3 text-xs text-career-600 font-medium flex items-center hover:underline"
            >
              View details
              <ArrowUpRight className="h-3 w-3 ml-1" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
