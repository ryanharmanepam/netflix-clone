import { useState } from "react";
import { Tabs } from "..";
import { genreTabs } from "./mockTabs";

export const GenreSelection = () => {
  const [tabs, setTabs] = useState(genreTabs);

  const onTabClick = (id: number) => {
    const newTabs = tabs.map((tab) =>
      tab.id === id
        ? { ...tab, isSelected: true }
        : { ...tab, isSelected: false }
    );
    setTabs(newTabs);
  };

  return <Tabs tabs={tabs} onTabClick={onTabClick} />;
};
