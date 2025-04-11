
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  BarChart2,
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Home,
  MessagesSquare,
  Settings,
  Users,
  Video,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  userType?: "student" | "mentor" | "admin";
  className?: string;
}

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  userTypes?: Array<"student" | "mentor" | "admin">;
}

export function Sidebar({ userType = "student", className }: SidebarProps) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarItems: SidebarItem[] = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: FileText, label: "Resume", href: "/resume", userTypes: ["student"] },
    { icon: BarChart2, label: "Job Market", href: "/job-market" },
    { icon: Users, label: "Networking", href: "/networking" },
    { icon: BookOpen, label: "Learning", href: "/learning" },
    { icon: GraduationCap, label: "Mentorship", href: "/mentorship" },
    { icon: Video, label: "Webinars", href: "/webinars" },
    { icon: Calendar, label: "Roadmap", href: "/roadmap", userTypes: ["student"] },
    { icon: MessagesSquare, label: "Interviews", href: "/interviews", userTypes: ["student"] },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const filteredItems = sidebarItems.filter(
    (item) => !item.userTypes || item.userTypes.includes(userType)
  );

  return (
    <>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 flex flex-col border-r bg-sidebar w-64 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isMobile && isOpen ? "shadow-xl" : "",
          className
        )}
      >
        <div className="flex h-16 items-center border-b px-4">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="absolute right-2 top-2">
              <X className="h-5 w-5" />
            </Button>
          )}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
            <span className="text-career-500">Career</span>
            <span>Verse</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-1">
            {filteredItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-current" />
                {item.label}
              </Link>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="px-3 py-2">
            <h3 className="text-xs font-medium text-muted-foreground">Recent Activities</h3>
            <div className="mt-3 space-y-3">
              <div className="rounded-md border bg-card p-3 text-xs">
                <p className="font-medium text-card-foreground">Resume Updated</p>
                <p className="mt-1 text-muted-foreground">You updated your resume 2 hours ago</p>
              </div>
              <div className="rounded-md border bg-card p-3 text-xs">
                <p className="font-medium text-card-foreground">New Connection</p>
                <p className="mt-1 text-muted-foreground">You connected with John Doe yesterday</p>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <div className="flex h-full w-full items-center justify-center bg-career-100 text-career-500">
                {userType === "student" ? "S" : userType === "mentor" ? "M" : "A"}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">User Account</p>
              <p className="text-xs text-muted-foreground capitalize">{userType}</p>
            </div>
          </div>
        </div>
      </aside>
      
      {isMobile && !isOpen && (
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleSidebar}
          className="fixed left-4 top-20 z-20 shadow-md rounded-full h-10 w-10"
        >
          <Home className="h-5 w-5" />
        </Button>
      )}
      
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
