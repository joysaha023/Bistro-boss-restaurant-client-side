import React, { useState } from "react";
import Coverd from "../../../Components/Coverd/Coverd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const popular = menu.filter((item) => item.category === "popular");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Coverd
        title={"Order Food"}
        img={"https://i.ibb.co/S60gLX7/banner2.jpg"}
      ></Coverd>
      <div className="max-w-6xl mx-auto mt-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
