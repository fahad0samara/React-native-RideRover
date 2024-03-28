import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

import Home from "./src/screen/Home";
import SearchScreen from "./src/screen/SearchScreent";
import Cart from "./src/cart/Cart";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import BikeDetails from "./src/screen/Home/BikeDetails";

const Stack = createStackNavigator();
const Tab = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Tabs"
          >
            <Stack.Screen name="Tabs" component={TabsNavigator} />
            <Stack.Screen name="BikeDetails" component={BikeDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Bikes") {
            iconName = focused ? "bicycle" : "bicycle";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search"; 
          } else if (route.name === "Cart") {
            iconName = focused ? "shopping-cart" : "shopping-cart";
          } else if (route.name === "Notifications") {
            iconName = focused ? "bell" : "bell-o";
          }

          iconName = iconName || "question"; 
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#F59E0B",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Bikes" component={Home} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default App;
