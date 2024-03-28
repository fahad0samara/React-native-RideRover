import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  Platform,
  ActivityIndicator,
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";
import API_URL from "../../apiConfig";
import BicycleCard from "./Home/BicycleCard";

export interface Bike {
  _id: string;
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
}

interface CategoryProps {
  item: { title: string };
  onPress: (title: string) => void;
  selected: string;
}

const Category: React.FC<CategoryProps> = ({ item, onPress, selected }) => {
    return (
      <TouchableOpacity
        style={[
          styles.categoryContainer,
          item.title === selected
            ? { backgroundColor: "#F59E0B" }
            : {
                backgroundColor: "#E5E7EB",
              },
        ]}
        onPress={() => onPress(item.title)}
      >
        <Text style={styles.categoryText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  
  const Home: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("Urban");
    const [data, setData] = useState<{ products: Bike[] }>({ products: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Change to string type
  
    const fetchData = async () => {
        try {
          const response = await axios.get<{ products: Bike[] }>(
            `${API_URL}/bikes/all`
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
          if (axios.isAxiosError(error)) {
            if (error.response) {
              // Server responded with a status code outside of 2xx
              setError(`Server responded with status ${error.response.status}`);
            } else if (error.request) {
              // Request was made but no response was received
              setError("Request made but no response received");
              
            } else {
              // Something happened in setting up the request
              setError("Error setting up the request");
            }
          } else {
            // Network error or other non-Axios error
            setError("Network Error: Please check your internet connection");
          }
        } finally {
          setLoading(false);
        }
      };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleCategoryPress = (title: string) => {
      setSelectedCategory(title);
    };
  
    const filteredBikes = data.products.filter(
      (product) => product.category === selectedCategory
    );
  
    const uniqueCategories = [...new Set(data.products.map((product) => product.category))];
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.header}>
        <View>

        <Text style={{ fontSize: 24, color: "#000000" }}>Hello, Rider</Text>
        
        <Text style={{ fontSize: 16, color: "#6B7280" }}>Let's find your bike</Text>
        </View>
     
        
            <View style={styles.headerIcons}>
              <IonIcon name="notifications-outline" size={25} />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>The World's</Text>
            <Text
              style={[
                styles.titleText,
                { color: "#F59E0B", fontSize: 24, fontWeight: "bold" },
              ]}
            >
              {" "}
              Best Bike
            </Text>
          </View>
          <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <FlatList
              data={uniqueCategories}
              renderItem={({ item }) => (
                <Category
                  item={{ title: item }}
                  onPress={handleCategoryPress}
                  selected={selectedCategory}
                />
              )}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoriesList}
            />
          </View>
          {loading ? (
            <ActivityIndicator style={styles.loadingIndicator} size="large" color="#0000ff" />
          ) : error ? (
            <Text style={styles.errorText}>Error fetching data. Please try again.</Text>
          ) : (
            <View style={styles.bicycleListContainer}>
              <FlatList
                data={filteredBikes}
                renderItem={({ item }) => <BicycleCard bike={item} />}
                keyExtractor={(item) => item._id}
                style={styles.bicycleList}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container1: {
    paddingHorizontal: 15,
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcons: {
    flexDirection: "row",
  },
  title: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
  },
  titleText: {
    color: "#6B7280",
    fontSize: 32,
  },
  categoriesContainer: {
    marginTop: 20,
  },
  categoriesTitle: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
  },
  categoriesList: {
    marginTop: 10,
  },
  bicycleListContainer: {
    marginTop: 20,
    flex: 1,
  },
  bicycleList: {
    marginTop: 5
  },

  categoryContainer: {
    backgroundColor: "#E5E7EB",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  categoryText: {
    color: "#6B7280",
  },
  categorySelected: {
    color: "#F59E0B",
    fontWeight: "bold",
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },

});

export default Home;
