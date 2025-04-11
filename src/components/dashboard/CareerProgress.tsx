
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <CardTitle>Career Progress</CardTitle>
            <CardDescription>
              Track your skill development and career growth
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            View details
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium">Overall Career Readiness</h4>
              <span className="text-sm font-medium">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </div>

          <div className="space-y-5">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-sm font-medium">{category}</h4>
                <div className="space-y-3">
                  {categorySkills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.progress}%
                        </span>
                      </div>
                      <Progress value={skill.progress} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-3">
            <h4 className="text-sm font-medium mb-1">Recommended Focus Areas</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {skills
                .filter((skill) => skill.progress < 50)
                .slice(0, 3)
                .map((skill) => (
                  <li key={skill.id}>• {skill.name}</li>
                ))}
            </ul>
            {skills.filter((skill) => skill.progress < 50).length > 3 && (
              <Button variant="link" size="sm" className="p-0 h-auto mt-1 text-career-600">
                See more
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
