import { Tab } from "../tab";

interface Tab {
  id: number;
  name: string;
  isSelected: boolean;
}

interface TabsProps {
  tabs: Tab[];
  onTabClick: (id: number) => void;
}

// TODO: Convert to nav later
export const Tabs = ({ tabs, onTabClick }: TabsProps) => {
  return (
    <div>
      {/* TODO: Styling for selected tab */}
      {tabs.map(({ id, name, isSelected }) => (
        <Tab key={id} onClick={() => onTabClick(id)} isSelected={isSelected}>
          {name}
        </Tab>
      ))}
    </div>
  );
};
