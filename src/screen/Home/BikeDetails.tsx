import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Bike } from "../Home"; // Assuming Bike type is imported from Home

const BikeDetails: React.FC<{ route: { params: { bike: Bike } }, navigation: any }> = ({ route, navigation }) => {
  const { bike } = route.params;

  const handleAddToCart = () => {
    // Implement functionality to add the bike to the cart
    // For example: dispatch an action to add the bike to the cart in Redux store
  };

  return (
    <View style={styles.container}>
      {/* Bike Image Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: bike.image }} style={styles.bikeImage} />
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#FFF" />
          {/* Optional Text */}
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Bike Details Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.bikeName}>{bike.name}</Text>
        <Text style={styles.bikePrice}>Price: ${bike.price}</Text>
        <Text style={styles.bikeDescription}>{bike.description}</Text>
      </View>

      {/* Add to Cart Button Section */}
      <View style={styles.addToCartContainer}>
        <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
          <Icon name="cart-plus" size={20} color="#FFF" />
          {/* Optional Text */}
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  bikeImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F59E0B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  bikeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bikePrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  bikeDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  addToCartContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 25,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F59E0B',
    paddingVertical: 13,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    marginLeft: 5,
  },
});

export default BikeDetails;
