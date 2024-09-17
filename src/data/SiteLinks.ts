import { SiteLinkKey } from "@/types/SiteLinks";

export const SiteLinks = {
  homeTop: {
    href: "/#course-overview",
    anchor: "Course Overview",
  },

  assignmentsTop: {
    href: "/assignments/#assignments",
    anchor: "Assignments",
  },
  assignmentsClarityAndPresentation: {
    href: "/assignments/#clarity-and-presentation",
    anchor: "Clarity and Presentation",
  },
  assignmentsContributionStatements: {
    href: "/assignments/#contribution-statements",
    anchor: "Contribution Statements",
  },

  assignment0Top: {
    href: "/assignments/assignment0/#assignment-0-introduction-slide",
    anchor: "Assignment 0",
  },

  milestone1Top: {
    href: "/assignments/assignment1/#assignment-1-project-proposal",
    anchor: "Milestone 1",
  },
  milestone2Top: {
    href: "/assignments/assignment2/#assignment-2-getting-the-right-design",
    anchor: "Milestone 2",
  },
  milestone3Top: {
    href: "/assignments/assignment3/#assignment-3",
    anchor: "Milestone 3",
  },
  milestone4Top: {
    href: "/assignments/assignment4/#assignment-4",
    anchor: "Milestone 4",
  },
  milestone5Top: {
    href: "/assignments/assignment5/#assignment-5",
    anchor: "Milestone 5",
  },

  calendarTop: {
    href: "/calendar/#calendar",
    anchor: "Calendar",
  },

  projectsTop: {
    href: "/projects/#projects",
    anchor: "Projects",
  },
} as const;
