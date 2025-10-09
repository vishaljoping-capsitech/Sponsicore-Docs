import { Anchor } from "antd";
 
interface AnchorItem {
  key: string;
  href: string;
  title: React.ReactNode;
  children?: AnchorItem[];
}
 
interface AnchorNavigatorProps {
  items: AnchorItem[];
}
 
const AnchorNavigator: React.FC<AnchorNavigatorProps> = ( { items } ) => {
  return (
    <Anchor offsetTop={150} getContainer={() => document.querySelector(".ant-layout-content") as HTMLElement} items={items} />
  );
};
 
export default AnchorNavigator;