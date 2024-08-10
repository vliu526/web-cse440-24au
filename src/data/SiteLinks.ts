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
  assignmentsAssignment0Top: {
    href: "/assignments/assignment0/#assignment-0-introduction-slide",
    anchor: "Assignment 0",
  },
  assignmentsAssignment1Top: {
    href: "/assignments/assignment1/#assignment-1-project-proposal",
    anchor: "Assignment 1",
  },
  assignmentsAssignment2Top: {
    href: "/assignments/assignment2/#assignment-2-getting-the-right-design",
    anchor: "Assignment 2",
  },
  assignmentsAssignment3Top: {
    href: "/assignments/assignment3/#assignment-3",
    anchor: "Assignment 3",
  },
  assignmentsAssignment4Top: {
    href: "/assignments/assignment4/#assignment-4",
    anchor: "Assignment 4",
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
