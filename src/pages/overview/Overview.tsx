import React from "react";
import { AnchorItemProps } from "../../types/Types";

const Overview: React.FC & { getAnchorItems?: () => AnchorItemProps[] } = () => {
  return (
    <>
      <div>Overview</div>
      <ol>
        <li id="part-1">Part-1</li>
        <li id="part-2">Part-2</li>
        <li id="part-3">Part-3</li>
      </ol>
    </>
  );
};

Overview.getAnchorItems = () => [
  { key: "part-1", href: "#part-1", title: "Part 1" },
  { key: "part-2", href: "#part-2", title: "Part 2" },
  { key: "part-3", href: "#part-3", title: "Part 3" },
];

export default Overview;
