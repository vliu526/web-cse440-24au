import * as React from "react";
import { FunctionComponent } from "react";

import { AppLink } from "@/components/links/AppLink";
import { Paths } from "@/paths.mjs";
import { Box, Paper, Stack } from "@mui/material";
import Image from "next-image-export-optimizer";

interface ProjectCardProps {
  name: string;
  logo: string;
  path: string;
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  return (
    <Paper
      sx={{
        marginRight: 1,
        marginY: 1,
        padding: 1,
      }}
    >
      <AppLink href={"/projects/" + props.path}>
        <Stack spacing={1}>
          <Box>{props.name}</Box>
          <Image
            src={props.logo}
            basePath={Paths.basePath}
            height="150"
            width="150"
            alt="" // Treat as decorative, because name is read above
          />
        </Stack>
      </AppLink>
    </Paper>
  );
};
