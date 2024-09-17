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

  //
  // Assignment 0
  //
  assignment_0_top: {
    href: "/assignments/assignment-0/#assignment-0-introduction-slide",
    anchor: "Assignment 0",
  },

  //
  // Milestone 1
  //
  milestone_1_top: {
    href: "/assignments/milestone-1/#milestone-1-overview",
    anchor: "Milestone 1",
  },
  assignment_1_1_top: {
    href: "/assignments/milestone-1/assignment-1-1/#assignment-1-1",
    anchor: "Assignment 1.1",
  },
  assignment_1_2_top: {
    href: "/assignments/milestone-1/assignment-1-2/#assignment-1-2",
    anchor: "Assignment 1.2",
  },
  assignment_1_3_top: {
    href: "/assignments/milestone-1/assignment-1-3/#assignment-1-3",
    anchor: "Assignment 1.3",
  },
  assignment_1_4_top: {
    href: "/assignments/milestone-1/assignment-1-4/#assignment-1-4",
    anchor: "Assignment 1.4",
  },
  milestone_1_report_top: {
    href: "/assignments/milestone-1/report/#milestone-1-report",
    anchor: "Milestone 1 Report",
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
