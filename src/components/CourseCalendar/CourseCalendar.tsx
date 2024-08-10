"use client";

import * as React from "react";

import { CalendarGridWeek } from "@/components/CourseCalendar/CalendarGridWeek";
import { calendarWeeks } from "@/data/CalendarData";
import { Grid } from "@mui/material";

export const CALENDAR_DATE_FORMAT = "EEE MMM d";

export const CourseCalendar: React.FunctionComponent = () => {
  return (
    <Grid container>
      {calendarWeeks().map((calendarWeekCurrent, calendarWeekIndex: number) => {
        return (
          <React.Fragment key={calendarWeekIndex}>
            <CalendarGridWeek
              labelWeek={(() => {
                if (calendarWeekIndex < 10) {
                  return `Week ${calendarWeekIndex + 1}`;
                } else if (calendarWeekIndex === 10) {
                  return "Poster Session";
                } else {
                  throw new Error(
                    `Unexpected calendarWeekIndex ${calendarWeekIndex}`,
                  );
                }
              })()}
              calendarWeek={calendarWeekCurrent}
            />
          </React.Fragment>
        );
      })}
    </Grid>
  );
};
