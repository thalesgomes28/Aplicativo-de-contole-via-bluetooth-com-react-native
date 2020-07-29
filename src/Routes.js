import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/home";
import Screen2 from "./screens/screen2"
import link from "@expo/vector-icons"

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerType="front"
      drawerStyle={{
        backgroundColor: '#054550',
        width: 240,
      }}
      drawerIcon={link}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="screen2" component={Screen2} />
    </Drawer.Navigator>
  );
}
