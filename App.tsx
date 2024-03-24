import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Cart } from "./src/cart/Cart";
import { Home } from "./src/screen/Home";

// Import your screens here

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BikesStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Bikes" component={Home} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={Cart} />
    {/* Add more screens if needed */}
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={Cart} />
    {/* Add more screens if needed */}
  </Stack.Navigator>
);

const NotificationsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Notifications" component={Cart} />
    {/* Add more screens if needed */}
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Bikes") {
              iconName = focused ? "bicycle" : "bicycle";
            } else if (route.name === "Profile") {
              iconName = focused ? "user" : "user-o";
            } else if (route.name === "Cart") {
              iconName = focused ? "shopping-cart" : "shopping-cart";
            } else if (route.name === "Notifications") {
              iconName = focused ? "bell" : "bell-o";
            }

            iconName = iconName || "question"; // default icon if iconName is undefined
            // You can return any component here
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#F59E0B",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Bikes" component={BikesStack}
   
          
         />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        <Tab.Screen name="Notifications" component={NotificationsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
