import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartSlice";
import { Bike } from "../../Type";

const BikeDetails: React.FC<{ route: { params: { bike: Bike } }, navigation: any }> = ({ route, navigation }) => {
  const { bike } = route.params;
  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(addItemToCart
        ({
            id: bike._id,
            name: bike.name,
            price: bike.price,
            quantity: 1,
            image: bike.image
    
        })
        );
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: bike.image }} style={styles.bikeImage} />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.bikeName}>{bike.name}</Text>
        <Text style={styles.bikeCategory}>Category: {bike.category}</Text>
        <Text style={styles.bikePrice}>Price: ${bike.price}</Text>
        <Text style={styles.bikeDescription}>{bike.description}</Text>
      </View>

      <View style={styles.addToCartContainer}>
        <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
          <Icon name="cart-plus" size={20} color="#FFF" />
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
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  bikeImage: {
    width: '100%',
    height: '100%',
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
  bikeCategory: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  bikePrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  bikeDescription: {
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 5,
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
