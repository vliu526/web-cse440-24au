import {
  ProjectSamplesMilestoneKeyValues,
  ProjectSamplesProjectKeyValues,
} from "@/data/ProjectSamplesData";
import { LinkHREF } from "@/types/CalendarData";

/**
 * Key for a sample project.
 */
export type ProjectSamplesProjectKey =
  (typeof ProjectSamplesProjectKeyValues)[number];

/**
 * Key for a sample project milestone.
 */
export type ProjectSamplesMilestoneKey =
  (typeof ProjectSamplesMilestoneKeyValues)[number];

/**
 * Type for a sample project.
 *
 * Includes a link to each sample project milestone.
 */
interface ProjectSample {
  name: string;
  link: LinkHREF;
  sampleCanvasLinks: {
    [item in ProjectSamplesMilestoneKey]: LinkHREF;
  };
}

/**
 * Type for collection of sample projects.
 */
type ProjectSamples = {
  [item in ProjectSamplesProjectKey]: ProjectSample;
};

/**
 * Type for the ProjectSamplesStore.
 */
export interface ProjectSamplesStore {
  samples: ProjectSamples;
}

/**
 * Assert the provided value is a valid ProjectSampleMilestoneKey.
 */
export function assertProjectSampleMilestoneKey(
  value: unknown,
): asserts value is ProjectSamplesMilestoneKey {
  const valid = (
    ProjectSamplesMilestoneKeyValues as unknown as Array<unknown>
  ).includes(value);

  if (!valid) {
    throw new Error(`Invalid AssignmentSampleLinkKey: ${value}`);
  }
}
