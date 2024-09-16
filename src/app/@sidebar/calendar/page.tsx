import * as React from "react";

import { Sidebar } from "@/components/Sidebar";

import { SITE_LINKS } from "../sitelinks";

export default function Page(): React.ReactElement {
  return (
    <Sidebar
      siteLinks={SITE_LINKS}
      pageLinks={[
        {
          anchor: "Calendar",
          href: "#calendar",
        },
        [
          {
            anchor: "Week 1",
            href: "#week-1",
          },
          {
            anchor: "Week 2",
            href: "#week-2",
          },
          {
            anchor: "Week 3",
            href: "#week-3",
          },
          {
            anchor: "Week 4",
            href: "#week-4",
          },
          {
            anchor: "Week 5",
            href: "#week-5",
          },
          {
            anchor: "Week 6",
            href: "#week-6",
          },
          {
            anchor: "Week 7",
            href: "#week-7",
          },
          {
            anchor: "Week 8",
            href: "#week-8",
          },
          {
            anchor: "Week 9",
            href: "#week-9",
          },
          {
            anchor: "Week 10",
            href: "#week-10",
          },
          {
            anchor: "Poster Session",
            href: "#poster-session",
          },
        ],
      ]}
    />
  );
}
