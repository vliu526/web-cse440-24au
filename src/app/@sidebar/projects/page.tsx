import * as React from "react";

import { Sidebar } from "@/components/Sidebar";

import { SITE_LINKS } from "../sitelinks";

export default function Page(): React.ReactElement {
  return (
    <Sidebar
      siteLinks={SITE_LINKS}
      pageLinks={[
        {
          anchor: "Projects",
          href: "/projects#projects",
        },
        [
          {
            anchor: "AutoPilot",
            href: "/projects/autopilot",
          },
          {
            anchor: "BakeSmart",
            href: "/projects/bakesmart",
          },
          {
            anchor: "CookEase",
            href: "/projects/cookease",
          },
          {
            anchor: "Dapper Dany",
            href: "/projects/dapperdany",
          },
          {
            anchor: "FitQuest",
            href: "/projects/fitquest",
          },
          {
            anchor: "Language Lab",
            href: "/projects/languagelab",
          },
          {
            anchor: "MessageMinder",
            href: "/projects/messageminder",
          },
          {
            anchor: "MindMii",
            href: "/projects/mindmii",
          },
          {
            anchor: "MindShift",
            href: "/projects/mindshift",
          },
          {
            anchor: "Music Box",
            href: "/projects/musicbox",
          },
          {
            anchor: "OrcaPod",
            href: "/projects/orcapod",
          },
          {
            anchor: "PupPals",
            href: "/projects/puppals",
          },
          {
            anchor: "ReelTalk",
            href: "/projects/reeltalk",
          },
          {
            anchor: "RestPad",
            href: "/projects/restpad",
          },
        ],
      ]}
    />
  );
}
