import * as React from "react";

interface TitleCenteredBlockProps {
  title: string;
  textAlign: "center";
  fontSize: number;
  margin?: number;
}

/* Created for personal use by - Denny Zhou*/
export const CenteredTitleBlock: React.FunctionComponent<
  TitleCenteredBlockProps
> = ({
  title,
  textAlign = "center",
  fontSize = "1.5rem",
  margin = "1rem auto",
}) => {
  return (
    <div style={{ textAlign, margin }}>
      <h6 style={{ fontSize, margin: 0 }}>{title}</h6>
    </div>
  );
};

export default CenteredTitleBlock;
