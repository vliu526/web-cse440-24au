import * as React from "react";

import { Sidebar } from "@/components/Sidebar";

import { SITE_LINKS } from "../../sitelinks";

export default function Page(): React.ReactElement {
  return (
    <Sidebar
      siteLinks={SITE_LINKS}
      pageLinks={[
        {
          anchor: "Assignment 4",
          href: "#assignment-4",
        },
        [
          {
            anchor: "4web - Web Post",
            href: "#assignment-4web-web-post",
          },
          {
            anchor: "4web_final - Web Post",
            href: "#assignment-4web-final-web-post",
          },
          {
            anchor: "4poster - Poster and Pitch",
            href: "#assignment-4poster-poster-and-pitch",
          },
          {
            anchor: "4poster_final - Poster and Pitch",
            href: "#assignment-4poster-final-poster-and-pitch",
          },
          {
            anchor: "4poster_session - Poster Session",
            href: "#assignment-4poster-session-poster-session",
          },
        ],
      ]}
    />
  );
}
