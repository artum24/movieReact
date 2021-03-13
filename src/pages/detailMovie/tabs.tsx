import React from "react";

import { Tabs, Tab } from "@material-ui/core";

type TabsItemType = {
  handleChange: (e: any, value: number) => void;
  value: number;
};

const TabsItem: React.FC<TabsItemType> = ({ handleChange, value }) => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Актеры"></Tab>
      <Tab label="Трейлеры"></Tab>
      <Tab label="Похожие"></Tab>
    </Tabs>
  );
};

export default TabsItem;
