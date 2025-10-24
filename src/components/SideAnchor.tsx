import { Anchor } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { useEffect, useState } from "react";
import { AnchorItemProps, ISideBarKeys } from "../types/Types";

interface SideAnchorProps {
  anchorItems: AnchorItemProps[];
  selectedKey: ISideBarKeys;
}

const SideAnchor = ({ anchorItems, selectedKey }: SideAnchorProps) => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const [activeAnchor, setActiveAnchor] = useState<string>(
    anchorItems?.[0]?.href || ""
  );

  // Ensure the first section's icon remains active when no section is in view
  useEffect(() => {
    const container = document.querySelector(".ant-layout-content");
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop <= 5 && anchorItems?.length) {
        setActiveAnchor(anchorItems[0]?.href || "");
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [anchorItems, selectedKey]);

  return (
    <Anchor
      className={`${mode === "dark" ? "dark" : ""}`}
      replace
      offsetTop={150}
      items={anchorItems}
      onChange={(currentActiveLink) => setActiveAnchor(currentActiveLink || "")}
      getCurrentAnchor={() => activeAnchor || anchorItems?.[0]?.href}
      getContainer={() =>
        document.querySelector(".ant-layout-content") as HTMLElement
      }
    />
  );
};

export default SideAnchor;
