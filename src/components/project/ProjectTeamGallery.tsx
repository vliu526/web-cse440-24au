import * as React from "react";
import { FunctionComponent } from "react";

import { Paths } from "@/paths.mjs";
import { Box, Grid, Paper, Stack } from "@mui/material";
import Image from "next-image-export-optimizer";

interface ProjectTeamMemberProps {
  name: string[];
  photo: string;
  alt?: string;
}

interface ProjectTeamGalleryProps {
  members: ProjectTeamMemberProps[];
}

export const ProjectTeamGallery: FunctionComponent<ProjectTeamGalleryProps> = (
  props,
) => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {props.members
          .sort((a, b) => {
            const sortNameA = a.name.join(" ");
            const sortNameB = b.name.join(" ");

            return sortNameA.localeCompare(sortNameB);
          })
          .map((teamMemberProps, index) => (
            <Grid item key={index}>
              <Paper
                sx={{
                  marginRight: 1,
                  marginY: 1,
                  padding: 1,
                }}
              >
                <Stack spacing={1}>
                  <Box>
                    {teamMemberProps.name.map((nameEntry, index) => {
                      if (index === 0) {
                        return (
                          <React.Fragment key={index}>
                            {nameEntry}
                          </React.Fragment>
                        );
                      } else {
                        return (
                          <React.Fragment key={index}>
                            <br />
                            {nameEntry}
                          </React.Fragment>
                        );
                      }
                    })}
                  </Box>
                  <Image
                    basePath={Paths.basePath}
                    src={teamMemberProps.photo}
                    width="125"
                    alt={
                      teamMemberProps.alt ? teamMemberProps.alt : "" // Treat as decorative, because name is read above
                    }
                  />
                </Stack>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
};
