import * as React from "react";

import { AppLink } from "@/components/links/AppLink";
import {
  getProjectSamplesStore,
  ProjectSamplesProjectKeyValues,
} from "@/data/ProjectSamplesData";
import {
  assertProjectSampleMilestoneKey,
  ProjectSamplesMilestoneKey,
} from "@/types/ProjectSamplesStore";
import { Alert } from "@mui/material";

interface ProjectMilestoneSamplesProps {
  milestone: ProjectSamplesMilestoneKey;
}

export const ProjectMilestoneSamples: React.FunctionComponent<
  ProjectMilestoneSamplesProps
> = (props) => {
  // Validate props, TypeScript does not validate in MDX
  assertProjectSampleMilestoneKey(props.milestone);

  return (
    <React.Fragment>
      <p>
        Samples are intended to illustrate a variety of approaches, none of
        which is intended to be ideal or exemplary. Also note details of
        assignments may have changed since prior offerings, so these samples may
        not completely correspond to the current project. Be sure to understand
        and carefully consider project requirements and feedback from the course
        staff in the context of your own work.
      </p>
      {["assignment1b"].includes(props.milestone) && (
        <Alert severity="warning">
          Some samples are from a significantly revised prior milestone.
        </Alert>
      )}
      {(() => {
        const projectSamplesStore = getProjectSamplesStore();

        return ProjectSamplesProjectKeyValues.map((sampleKeyCurrent) => {
          const sampleCurrent = projectSamplesStore.samples[sampleKeyCurrent];

          const renderMilestone: ProjectSamplesMilestoneKey = (() => {
            if (
              props.milestone == "assignment1b" &&
              [
                "bookwurm",
                "dash",
                "jasper",
                "wishingwell", // 17wi
                "backtrack",
                "hermes",
                "pilltender",
                "simpark", // 17au
                "laundr",
                "note",
                "pawsitive",
                "seek", // 19wi
              ].includes(sampleKeyCurrent)
            ) {
              return "assignment1c";
            }

            return props.milestone;
          })();

          return (
            // Ensure we have a sample for this project
            !!sampleCurrent.sampleCanvasLinks?.[renderMilestone] && (
              <React.Fragment key={sampleKeyCurrent}>
                <p>
                  <AppLink
                    href={sampleCurrent.sampleCanvasLinks[renderMilestone]}
                  >
                    {"Sample " + renderMilestone}
                  </AppLink>
                  {" from "}
                  <AppLink href={sampleCurrent.link}>
                    {sampleCurrent.name}
                  </AppLink>
                </p>
              </React.Fragment>
            )
          );
        });
      })()}
    </React.Fragment>
  );
};
