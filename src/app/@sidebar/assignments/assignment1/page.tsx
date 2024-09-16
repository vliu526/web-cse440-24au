import * as React from "react";

import { Sidebar } from "@/components/Sidebar";

import { SITE_LINKS } from "../../sitelinks";

export default function Page(): React.ReactElement {
  return (
    <Sidebar
      siteLinks={SITE_LINKS}
      pageLinks={[
        {
          anchor: "Assignment 1",
          href: "#assignment-1",
        },
        [
          {
            anchor: "1a - Individual Brainstorm",
            href: "#assignment-1a-individual-brainstorm",
          },
          {
            anchor: "1b - Group Proposals",
            href: "#assignment-1b-group-proposals",
          },
          {
            anchor: "1c - Finalized Proposal",
            href: "#assignment-1c-finalized-proposal",
          },
        ],
      ]}
    />
  );
}
