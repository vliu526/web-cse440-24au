import * as React from "react";

import { Sidebar } from "@/components/Sidebar";

import { SITE_LINKS } from "../../sitelinks";

export default function Page(): React.ReactElement {
  return (
    <Sidebar
      siteLinks={SITE_LINKS}
      pageLinks={[
        {
          anchor: "Assignment 2",
          href: "#assignment-2",
        },
        [
          {
            anchor: "2a - Project Ideation",
            href: "#assignment-2a-project-ideation",
          },
          {
            anchor: "2b - Design Research Plan",
            href: "#assignment-2b-design-research-plan",
          },
          {
            anchor: "2c - Design Research Check-In",
            href: "#assignment-2c-design-research-check-in",
          },
          {
            anchor: "2d - Design Research Review",
            href: "#assignment-2d-design-research-review",
          },
          {
            anchor: "2e - Task Review",
            href: "#assignment-2e-task-review",
          },
          {
            anchor: "2f - Design Check-In",
            href: "#assignment-2f-design-check-in",
          },
          {
            anchor: "2g - Design Review",
            href: "#assignment-2g-design-review",
          },
          {
            anchor: "2p - Presentation",
            href: "#assignment-2p-presentation",
          },
        ],
      ]}
    />
  );
}
