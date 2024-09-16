import * as React from "react";

import ProjectImagesBlock from "@/components/project/ProjectImagesBlock";

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectImageBlockProps {
  children: React.ReactNode;
  image: ProjectImage;
  caption?: string;
  width: 4 | 6 | 8;
  maxHeight?: string;
}

export const ProjectImageBlock: React.FunctionComponent<
  ProjectImageBlockProps
> = (props) => {
  return (
    <ProjectImagesBlock
      images={[props.image]}
      caption={props.caption}
      direction={"row"}
      width={props.width}
      maxHeight={props.maxHeight}
    >
      {props.children}
    </ProjectImagesBlock>
  );
};

export default ProjectImageBlock;
