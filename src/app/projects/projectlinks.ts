import imageLogoH from "public/images/projects/betbreaker/project_thumb.png";
import imageLogoK from "public/images/projects/boredwalk/project_thumb.png";
import imageLogoB from "public/images/projects/dawgsense/project_thumb.png";
import imageLogoJ from "public/images/projects/focusshift/project_thumb.png";
import imageLogoA from "public/images/projects/gemhunter/project_thumb.png";
import imageLogoI from "public/images/projects/huskyride/project_thumb.png";
import imageLogoL from "public/images/projects/planventure/planventureLogo.png";
import imageLogoE from "public/images/projects/potpal/project_thumb.png";
import imageLogoD from "public/images/projects/preparebear/project_thumb.png";
import imageLogoC from "public/images/projects/tiltd/project_thumb.png";
// import imageLogoF from 'public/images/projects/missing/project_thumb.png';
import imageLogoG from "public/images/projects/wanderlust/project_thumb.png";

// Names and links associated with projects need to be maintained:
// - Here.
// - In the folder structure of /public/images/projects.
// - In the folder structure of /src/app/projects.
// - In /public/.htaccess.
export const ProjectLinks = (
  [
    {
      href: "/projects/gemhunter/",
      anchor: "Gem Hunter",
      logo: imageLogoA,
    },
    {
      href: "/projects/dawgsense/",
      anchor: "DawgSense",
      logo: imageLogoB,
    },
    {
      href: "/projects/tiltd/",
      anchor: "Tiltd",
      logo: imageLogoC,
    },
    {
      href: "/projects/preparebear/",
      anchor: "Prepare Bear",
      logo: imageLogoD,
    },
    {
      href: "/projects/potpal/",
      anchor: "Pot Pal",
      logo: imageLogoE,
    },
    // {
    //     href: "/projects/missing/",
    //     anchor: "Missing",
    //     logo: imageLogoF,
    // },
    {
      href: "/projects/wanderlust/",
      anchor: "Wanderlust",
      logo: imageLogoG,
    },
    {
      href: "/projects/betbreaker/",
      anchor: "BetBreaker",
      logo: imageLogoH,
    },
    {
      href: "/projects/huskyride/",
      anchor: "Husky Ride",
      logo: imageLogoI,
    },
    {
      href: "/projects/focusshift/",
      anchor: "FocusShift",
      logo: imageLogoJ,
    },
    {
      href: "/projects/boredwalk/",
      anchor: "BoredWalk",
      logo: imageLogoK,
    },
    {
      href: "/projects/planventure/",
      anchor: "Planventure",
      logo: imageLogoL,
    },
  ] as const
).toSorted((a, b) => {
  return a.href.localeCompare(b.href, undefined, { sensitivity: "base" });
});
