"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { addDays, eachDayOfInterval } from "date-fns";
import clsx from "clsx";

export default function CalendarOverview() {
  const [events, setEvents] = React.useState<any[]>([]);
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/dashboard/events/data");
        const data = await response.json();
        setEvents(data.events || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const eventColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-red-500",
  ];

  // Génère une map { dateString: ["colorClass1", "colorClass2", ...] }
  const dateToColorsMap: Record<string, string[]> = {};

  events.forEach((event, index) => {
    const color = eventColors[index % eventColors.length];
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);

    const daysInRange = eachDayOfInterval({ start, end });
    daysInRange.forEach((day) => {
      const key = day.toDateString();
      if (!dateToColorsMap[key]) {
        dateToColorsMap[key] = [];
      }
      dateToColorsMap[key].push(color);
    });
  });

  const renderDay = (day: Date) => {
    const key = day.toDateString();
    const colors = dateToColorsMap[key] || [];

    return (
      <div className="w-full h-full relative">
        <div className="text-sm z-10 relative">{day.getDate()}</div>
        <div className="absolute bottom-0 left-0 right-0 flex gap-0.5 justify-center h-1.5">
          {colors.map((colorClass, idx) => (
            <div
              key={idx}
              className={clsx("w-1.5 h-1.5 rounded-full", colorClass)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center text-foreground mb-4 mt-6">
        <h1 className="text-3xl font-semibold">Calendrier d'évènements</h1>
      </div>
      <div className="w-full flex justify-center">
        <Card className="w-full max-w-4xl">
          <CardContent className="p-6">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              className="bg-transparent p-0 w-full"
              buttonVariant="outline"
              renderDay={(date) => {
                const dayEvents = events.filter((event) => {
                  const start = new Date(event.startDate);
                  const end = new Date(event.endDate);
                  return date >= start && date <= end;
                });

                return (
                  <div className="relative flex items-center justify-center w-full h-full">
                    <span>{date.getDate()}</span>
                    {dayEvents.map((event, index) => (
                      <span
                        key={index}
                        className={`absolute bottom-1 h-1 w-2.5 rounded-full ${
                          eventColors[index % eventColors.length]
                        }`}
                      />
                    ))}
                  </div>
                );
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
