import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, Image, StyleSheet, ActivityIndicator, Platform, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Bike } from './Home'; // Assuming Bike type is defined in Home file
import API_URL from '../../apiConfig'; // Import your API URL constant
import { useNavigation } from '@react-navigation/native';
import { BikeDetailsScreenNavigationProp } from '../Type';

const SearchScreen: React.FC = ({ bike }) => {
  const navigation = useNavigation<BikeDetailsScreenNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Bike[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [noItemsFound, setNoItemsFound] = useState(false);

  const handleCardPress = () => {
    navigation.navigate('BikeDetails', { bike });
  };



  useEffect(() => {
    if (searchQuery.length >= 3) {
      handleSearch();
    } else {
      setSearchResults([]);

      setNoItemsFound(false);
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    setIsSearching(true);
    setNoItemsFound(false);
    try {
      const response = await axios.get<{ products: Bike[] }>(`${API_URL}/bikes/search?q=${searchQuery}`);
      const products = response.data;

      if (products && Array.isArray(products)) {
        setSearchResults(products);
        if (products.length === 0) {
          setNoItemsFound(true);
        }
      } else {
        // If products is not as expected, handle the error
        console.error('Error searching for bikes: Unexpected response structure');
      }
    } catch (error) {
      console.error('Error searching for bikes:', (error as Error).message);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>


    <View style={styles.container}>
    <TouchableOpacity
 
 // Add onPress event handler if needed
 onPress={handleCardPress}
>
      <Text style={styles.title}>Search for Bikes</Text>
      <TextInput
        style={styles.input}
        placeholder="Type at least 3 characters to search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {isSearching ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          {noItemsFound ? (
            <Text style={styles.noItemsText}>No items found</Text>
          ) : (
            <FlatList
              data={searchResults}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item._id}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',


  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  category: {
    marginBottom: 4,
  },
  price: {
    fontWeight: 'bold',
  },
  noItemsText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default SearchScreen;
