import * as React from "react";

import { Sidebar } from "@/components/Sidebar";

import { SITE_LINKS } from "../../sitelinks";

export default function Page(): React.ReactElement {
  return (
    <Sidebar
      siteLinks={SITE_LINKS}
      pageLinks={[
        {
          anchor: "Assignment 3",
          href: "#assignment-3",
        },
        [
          {
            anchor: "3a - Paper Prototype",
            href: "#assignment-3a-paper-prototype",
          },
          {
            anchor: "3b - Heuristic Evaluation",
            href: "#assignment-3b-heuristic-evaluation",
          },
          {
            anchor: "3c - Usability Testing Check-In",
            href: "#assignment-3c-usability-testing-check-in",
          },
          {
            anchor: "3d - Usability Testing Review",
            href: "#assignment-3d-usability-testing-review",
          },
          {
            anchor: "3e - Digital Mockup",
            href: "#assignment-3e-digital-mockup",
          },
          {
            anchor: "3p - Presentation",
            href: "#assignment-3p-presentation",
          },
        ],
      ]}
    />
  );
}
