
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video } from "lucide-react";

interface Event {
  id: string;
  title: string;
  type: "webinar" | "mentorship" | "workshop";
  date: string;
  time: string;
  participants: number;
  host: string;
}

interface UpcomingEventsProps {
  events: Event[];
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Stay on track with your career development</CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col sm:flex-row gap-4 sm:items-start border-b pb-4 last:border-0"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-lg bg-career-50 text-career-500 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-medium">
                  {new Date(event.date).toLocaleString("default", { month: "short" })}
                </span>
                <span className="text-lg font-bold">
                  {new Date(event.date).getDate()}
                </span>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="font-medium">{event.title}</h4>
                    <div className="text-sm text-muted-foreground">
                      Hosted by {event.host}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {event.type === "webinar" && "Webinar"}
                    {event.type === "mentorship" && "Mentorship"}
                    {event.type === "workshop" && "Workshop"}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3.5 w-3.5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-3.5 w-3.5" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-2 sm:mt-0">
                <Button size="sm" variant="outline" className="w-full sm:w-auto">Details</Button>
                <Button size="sm" className="w-full sm:w-auto">
                  <Video className="h-4 w-4 mr-1" />
                  Join
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 flex justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {events.length} of {events.length} events
        </div>
        <Button variant="link" size="sm" className="text-career-600">
          Add to calendar
        </Button>
      </CardFooter>
    </Card>
  );
}
