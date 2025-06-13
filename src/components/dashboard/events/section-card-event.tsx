"use client";

import * as React from "react";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  const [totalBudget, setTotalBudget] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch("/api/dashboard/events/data");
        const data = await response.json();

        if (data.events) {
          const calculatedTotalBudget = data.events.reduce(
            (sum: number, event: { budget: number | null }) => {
              return sum + (event.budget || 0);
            },
            0
          );
          setTotalBudget(calculatedTotalBudget);
        }
      } catch (error) {
        console.error("Error fetching events data:", error);
      }
    };

    fetchEventsData();
  }, []);

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Budget</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalBudget !== null
              ? `${totalBudget.toFixed(2)} €`
              : "Loading..."}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              Loading...
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Aperçu du budget <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Budget total investi pour tous vos événements
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
