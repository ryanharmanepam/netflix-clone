import React, { useState } from "react";
import { Tabs } from "..";

export const GenreSelection = () => {
  const [tabs, setTabs] = useState(genreTabs);

  const onTabClick = (id: number) => {
    const newTabs = tabs.map((i) =>
      i.id === id ? { ...i, isSelected: true } : { ...i, isSelected: false }
    );
    setTabs(newTabs);
  };

  return <Tabs tabs={tabs} onTabClick={onTabClick} />;
};

const genreTabs = [
  { id: 0, name: "All", isSelected: true },
  { id: 1, name: "Documentary", isSelected: false },
  { id: 2, name: "Comedy", isSelected: false },
  { id: 3, name: "Horror", isSelected: false },
  { id: 4, name: "Crime", isSelected: false },
];
