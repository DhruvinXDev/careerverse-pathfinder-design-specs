
import { BookOpen, Clock, TrendingUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WelcomeBarProps {
  userName: string;
  profileCompletionPercent: number;
  className?: string;
}

export function WelcomeBar({
  userName,
  profileCompletionPercent,
  className,
}: WelcomeBarProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-career-600 to-career-800 text-white p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
              <p className="text-white/80 mt-1">
                Track your progress and continue your career journey
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="sm" className="gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Career Path</span>
              </Button>
              <Button variant="secondary" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span>Edit Profile</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-background">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-career-100 p-2">
              <User className="h-5 w-5 text-career-600" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Profile Completion</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-career-500 rounded-full"
                    style={{ width: `${profileCompletionPercent}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{profileCompletionPercent}%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-career-100 p-2">
              <BookOpen className="h-5 w-5 text-career-600" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Learning Progress</div>
              <div className="text-sm font-medium">3 courses in progress</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-career-100 p-2">
              <Clock className="h-5 w-5 text-career-600" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Upcoming Events</div>
              <div className="text-sm font-medium">2 webinars this week</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
