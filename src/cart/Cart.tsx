import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

const Subtotal = () => {
  return (
    <View style={styles.subtotalContainer}>
      <View style={styles.subtotalItem}>
        <Text style={styles.subtotalText}>Subtotal</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currency}>$</Text>
          <Text style={styles.price}>3,400.00</Text>
        </View>
      </View>
      <View style={styles.subtotalItem}>
        <Text style={styles.subtotalText}>Shipping</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currency}>$</Text>
          <Text style={styles.price}>400.00</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.subtotalItem}>
        <Text style={styles.subtotalText}>Total</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currency}>$</Text>
          <Text style={styles.price}>3,800.00</Text>
        </View>
      </View>
    </View>
  );
};

const BicycleCard = () => {
  const [amount, setAmount] = useState(1);

  return (
    <View style={styles.bicycleCardContainer}>
      <View style={styles.bicycleCard}>
        <View style={styles.imageContainer}>
  
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.bikeName}>Pinarello Bike</Text>
          <Text style={styles.bikeType}>Mountain Bike</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.currency}>$</Text>
            <Text style={styles.price}>{Number(amount * 1200).toFixed(2)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.interactionContainer}>
        <IonIcon name="ios-trash" color="orange" size={20} />
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => {
              if (amount > 0) setAmount(amount - 1);
            }}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{amount}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => {
              setAmount(amount + 1);
            }}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Cart list</Text>
          <Text style={styles.subheaderText}>(3 items)</Text>
        </View>
        <View style={styles.blankContainer}>
          <Text style={styles.blankText}>BLANK</Text>
        </View>
      </View>
      <View style={styles.cardsContainer}>
        <BicycleCard />
        <BicycleCard />
        <BicycleCard />
      </View>
      <Subtotal />
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  headerTextContainer: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subheaderText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  blankContainer: {
    flexDirection: "row",
  },
  blankText: {
    color: "white",
  },
  cardsContainer: {
    marginTop: 20,
  },
  bicycleCardContainer: {
    marginBottom: 20,
  },
  bicycleCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    marginLeft: 15,
    flex: 1,
  },
  bikeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  bikeType: {
    fontSize: 14,
    color: "gray",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  currency: {
    fontSize: 16,
    color: "yellow",
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  interactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "black",
    borderRadius: 50,
    padding: 5,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  subtotalContainer: {
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  subtotalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 15,
  },
  checkoutButton: {
    backgroundColor: "yellow",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",



	  },	
});

