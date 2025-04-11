
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, BookOpen, FileText, Play, Star, Users, Video } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  type: "course" | "article" | "video" | "mentor" | "template";
  author: string;
  duration?: string;
  rating?: number;
  thumbnail?: string;
  tags: string[];
  url: string;
}

interface RecommendedResourcesProps {
  resources: Resource[];
}

export function RecommendedResources({ resources }: RecommendedResourcesProps) {
  // Separate resources by type
  const courses = resources.filter((r) => r.type === "course");
  const articles = resources.filter((r) => r.type === "article");
  const videos = resources.filter((r) => r.type === "video");
  const mentors = resources.filter((r) => r.type === "mentor");
  const templates = resources.filter((r) => r.type === "template");

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "course":
        return <BookOpen className="h-4 w-4" />;
      case "article":
        return <FileText className="h-4 w-4" />;
      case "video":
        return <Play className="h-4 w-4" />;
      case "mentor":
        return <Users className="h-4 w-4" />;
      case "template":
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <CardTitle>Recommended Resources</CardTitle>
            <CardDescription>
              Personalized resources to help you advance
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4 w-full max-w-[600px]">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {resources.slice(0, 4).map((resource) => (
              <ResourceItem key={resource.id} resource={resource} />
            ))}
          </TabsContent>
          
          <TabsContent value="courses" className="space-y-4">
            {courses.length > 0 ? (
              courses.map((resource) => (
                <ResourceItem key={resource.id} resource={resource} />
              ))
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No courses recommendations available yet.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="articles" className="space-y-4">
            {articles.length > 0 ? (
              articles.map((resource) => (
                <ResourceItem key={resource.id} resource={resource} />
              ))
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No article recommendations available yet.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="videos" className="space-y-4">
            {videos.length > 0 ? (
              videos.map((resource) => (
                <ResourceItem key={resource.id} resource={resource} />
              ))
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No video recommendations available yet.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="mentors" className="space-y-4">
            {mentors.length > 0 ? (
              mentors.map((resource) => (
                <ResourceItem key={resource.id} resource={resource} />
              ))
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No mentor recommendations available yet.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function ResourceItem({ resource }: { resource: Resource }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border-b pb-4 last:border-0">
      {resource.thumbnail ? (
        <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
          <img
            src={resource.thumbnail}
            alt={resource.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full sm:w-24 h-24 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
          {resource.type === "course" && <BookOpen className="h-8 w-8 text-muted-foreground" />}
          {resource.type === "article" && <FileText className="h-8 w-8 text-muted-foreground" />}
          {resource.type === "video" && <Video className="h-8 w-8 text-muted-foreground" />}
          {resource.type === "mentor" && <Users className="h-8 w-8 text-muted-foreground" />}
          {resource.type === "template" && <FileText className="h-8 w-8 text-muted-foreground" />}
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h4 className="font-medium">{resource.title}</h4>
            <div className="text-sm text-muted-foreground">
              {resource.author}
            </div>
          </div>
          <Badge variant="secondary" className="w-fit capitalize">
            {resource.type}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
          {resource.duration && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-3.5 w-3.5" />
              <span>{resource.duration}</span>
            </div>
          )}
          {resource.rating && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="mr-1 h-3.5 w-3.5 text-yellow-500" />
              <span>{resource.rating}/5</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {resource.tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="mt-3">
          <Button
            variant="link"
            size="sm"
            className="h-auto p-0 text-career-600"
            asChild
          >
            <a href={resource.url} className="flex items-center">
              {resource.type === "course" && "Start Learning"}
              {resource.type === "article" && "Read Article"}
              {resource.type === "video" && "Watch Video"}
              {resource.type === "mentor" && "View Profile"}
              {resource.type === "template" && "Use Template"}
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
