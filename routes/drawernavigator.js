import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";


import Home from "../screens/home";
import Albums from "../screens/albums";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={Albums} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;