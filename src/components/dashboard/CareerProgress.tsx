
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";

interface SkillProgress {
  id: string;
  name: string;
  progress: number;
  category: string;
}

interface CareerProgressProps {
  skills: SkillProgress[];
  overallProgress: number;
}

export function CareerProgress({ skills, overallProgress }: CareerProgressProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillProgress[]>);

  return (
    <Card className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border-t-4 border-t-career-500">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <CardTitle>Career Progress</CardTitle>
            <CardDescription>
              Track your skill development
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="group transition-all duration-200">
            View details
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="pulse-highlight p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium">Overall Career Readiness</h4>
              <span className="text-sm font-medium">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-2.5 bg-secondary" 
              style={{
                backgroundImage: overallProgress > 30 ? 'linear-gradient(to right, rgb(139, 92, 246), rgb(79, 70, 229))' : undefined
              }}
            />
          </div>

          <div className="space-y-5">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-sm font-medium flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-career-500 mr-2"></span>
                  {category}
                </h4>
                <div className="space-y-3 pl-2 border-l-2 border-l-gray-100 dark:border-l-gray-800">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="group hover:bg-secondary/50 p-2 -ml-2 rounded-md transition-all duration-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.progress}%
                        </span>
                      </div>
                      <Progress value={skill.progress} className="h-1.5 bg-secondary/70" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <h4 className="text-sm font-medium mb-2">Recommended Focus Areas</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              {skills
                .filter((skill) => skill.progress < 50)
                .slice(0, 3)
                .map((skill) => (
                  <li key={skill.id} className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-career-400 mr-2"></span>
                    {skill.name}
                  </li>
                ))}
            </ul>
            {skills.filter((skill) => skill.progress < 50).length > 3 && (
              <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-career-600 group">
                See more
                <ChevronRight className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
