import * as React from "react";
import { FunctionComponent } from "react";

import { Paths } from "@/paths.mjs";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next-image-export-optimizer";

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectImagesBlockProps {
  children: React.ReactNode;
  images: ProjectImage[];
  caption?: string;
  direction: "row" | "column";
  width: 4 | 6 | 8;
  maxHeight?: string;
}

export const ProjectImagesBlock: FunctionComponent<ProjectImagesBlockProps> = (
  props,
) => {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item md={12 - props.width} sx={{ marginTop: -2 }}>
          {props.children}
        </Grid>
        <Grid item md={props.width} sx={{ marginTop: -2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: props.direction,
              justifyContent: "center",
            }}
          >
            {props.images.map((projectImage) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexBasis: "100%",
                }}
                key={projectImage.src}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <Paper
                    sx={{
                      marginX: 1,
                      marginTop: 2,
                      padding: 1,
                      paddingBottom: "4px", // Minus border radius
                    }}
                  >
                    <Image
                      basePath={Paths.basePath}
                      src={projectImage.src}
                      style={{
                        height: "auto",
                        maxHeight:
                          props.maxHeight === undefined
                            ? "400px"
                            : props.maxHeight,
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                      alt={projectImage.alt}
                    />
                  </Paper>
                  {projectImage.caption != undefined && (
                    <React.Fragment>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          marginX: 1,
                          marginTop: 1,
                          marginBottom: 4,
                        }}
                      >
                        <Typography fontStyle="oblique">
                          {projectImage.caption}
                        </Typography>
                      </Box>
                    </React.Fragment>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
          {props.caption != undefined && (
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginX: 1,
                  marginTop: 1,
                  marginBottom: 4,
                }}
              >
                <Typography fontStyle="oblique">{props.caption}</Typography>
              </Box>
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProjectImagesBlock;
