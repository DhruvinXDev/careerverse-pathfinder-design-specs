
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { WelcomeBar } from "@/components/dashboard/WelcomeBar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { RecommendedResources } from "@/components/dashboard/RecommendedResources";
import { CareerProgress } from "@/components/dashboard/CareerProgress";
import { Event, Resource, Skill } from "@/types";

// Mock data for events
const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Advanced JavaScript for Web Developers",
    type: "webinar",
    date: "2025-04-20",
    time: "2:00 PM - 3:30 PM EST",
    participants: 48,
    host: "Sarah Johnson",
  },
  {
    id: "2",
    title: "Career Mentorship Session",
    type: "mentorship",
    date: "2025-04-22",
    time: "11:00 AM - 12:00 PM EST",
    participants: 1,
    host: "Michael Chen",
  },
  {
    id: "3",
    title: "Resume Building Workshop",
    type: "workshop",
    date: "2025-04-25",
    time: "1:00 PM - 3:00 PM EST",
    participants: 32,
    host: "Emily Rodriguez",
  },
];

// Mock data for resources
const recommendedResources: Resource[] = [
  {
    id: "1",
    title: "Modern JavaScript: From Fundamentals to Advanced",
    type: "course",
    author: "David Wilson",
    duration: "8 hours",
    rating: 4.8,
    tags: ["JavaScript", "Web Development", "Frontend"],
    url: "#",
  },
  {
    id: "2",
    title: "Building Your Tech Resume That Stands Out",
    type: "article",
    author: "Career Success Blog",
    duration: "12 min read",
    rating: 4.5,
    tags: ["Career", "Resume", "Job Search"],
    url: "#",
  },
  {
    id: "3",
    title: "How to Ace Your Technical Interview",
    type: "video",
    author: "TechCareer Channel",
    duration: "26 min",
    rating: 4.9,
    tags: ["Interview", "Career", "Tips"],
    url: "#",
  },
  {
    id: "4",
    title: "Professional Frontend Developer Resume",
    type: "template",
    author: "CareerVerse Templates",
    rating: 4.7,
    tags: ["Resume", "Template", "Frontend"],
    url: "#",
  },
  {
    id: "5",
    title: "Introduction to Data Science with Python",
    type: "course",
    author: "Alex Martinez",
    duration: "10 hours",
    rating: 4.6,
    tags: ["Python", "Data Science", "Programming"],
    url: "#",
  },
];

// Mock data for skills progress
const skillsProgress: Skill[] = [
  {
    id: "1",
    name: "JavaScript",
    progress: 85,
    category: "Technical Skills",
  },
  {
    id: "2",
    name: "React.js",
    progress: 75,
    category: "Technical Skills",
  },
  {
    id: "3",
    name: "CSS & Responsive Design",
    progress: 80,
    category: "Technical Skills",
  },
  {
    id: "4",
    name: "Communication",
    progress: 65,
    category: "Soft Skills",
  },
  {
    id: "5",
    name: "Problem Solving",
    progress: 70,
    category: "Soft Skills",
  },
  {
    id: "6",
    name: "Team Collaboration",
    progress: 60,
    category: "Soft Skills",
  },
  {
    id: "7",
    name: "Interview Preparation",
    progress: 45,
    category: "Career Skills",
  },
  {
    id: "8",
    name: "Resume Building",
    progress: 90,
    category: "Career Skills",
  },
  {
    id: "9",
    name: "Networking",
    progress: 40,
    category: "Career Skills",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout userName="Alex Taylor" userType="student">
      <div className="space-y-6">
        <div className="animated-gradient-border">
          <div className="bg-background rounded-lg">
            <WelcomeBar userName="Alex" profileCompletionPercent={75} />
          </div>
        </div>
        
        <div>
          <StatsCards />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="enhanced-card h-full">
              <UpcomingEvents events={upcomingEvents} />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="enhanced-card h-full">
              <CareerProgress skills={skillsProgress} overallProgress={68} />
            </div>
          </div>
        </div>
        
        <div className="enhanced-card">
          <RecommendedResources resources={recommendedResources} />
        </div>
      </div>
    </DashboardLayout>
  );
}
