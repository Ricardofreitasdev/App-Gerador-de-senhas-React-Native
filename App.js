import React from "react";
import Create from "./src/pages/Create";
import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;

            if (route.name === "Senhas") {
              iconName = "list";
            } else if (route.name === "Nova") {
              iconName = "file-plus";
            }

            return <Feather name={iconName} size={20} color={"black"} />;
          },

          header: () => {
            return null
          },

          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Senhas" component={ Home } />
        <Tab.Screen name="Nova" component={ Create } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
