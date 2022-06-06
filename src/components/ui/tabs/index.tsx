import React from "react";

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
      {tabs.map((i) => (
        <div onClick={() => onTabClick(i.id)}>{i.name}</div>
      ))}
    </div>
  );
};
