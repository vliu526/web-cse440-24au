import * as React from "react";

import { Sidebar } from "@/components/Sidebar";

import { SITE_LINKS } from "./sitelinks";

interface DefaultProps {}

export const Default: React.FunctionComponent<DefaultProps> = ({}) => {
  return <Sidebar siteLinks={SITE_LINKS} pageLinks={[]}></Sidebar>;
};

export default Default;
