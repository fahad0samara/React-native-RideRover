import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux"; // Import useSelector hook

import Home from "./src/screen/Home";
import SearchScreen from "./src/screen/SearchScreent";
import Cart from "./src/cart/Cart";
import { RootState, persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import BikeDetails from "./src/screen/Home/BikeDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BikesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BikeDetails" component={BikeDetails} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((state:RootState) => state.cart.items);
  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

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
        // Add tabBarBadge to show the total quantity in the cart only on the Cart screen
        tabBarBadge: route.name === "Cart" ? totalQuantity : null,
        tabBarBadgeStyle: {
          backgroundColor: "#F59E0B",
          alignSelf: "center",
          

        },
      })}
    >
      <Tab.Screen name="Bikes" component={BikesStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Main" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
