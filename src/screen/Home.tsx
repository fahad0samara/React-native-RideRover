import React, { useState } from "react";
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
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

import data from "../../data/data.json";


const Category = ({ item, onPress, selected }) => {
    return (
      <TouchableOpacity
        style={[
          styles.categoryContainer,
          selected === item.title ? styles.categorySelected : {},
        ]}
        onPress={() => onPress(item.title)}
      >
        <Text style={styles.categoryText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const BicycleCard = ({ bike }) => {
    return (
      <TouchableOpacity
        style={styles.bicycleCardContainer}
        // Add onPress event handler if needed
      >
        <View style={styles.bicycleHeartContainer}>
          {/* Render heart icon */}
        </View>
        <Image
        
        source={require("../../assets/images/bicycle.png")}
              
              style={{ width: 100, height: 100 }} 
            />
        <View style={styles.bicycleDetailsContainer}>
          <Text style={styles.bicycleName}>{bike.name}</Text>
          <View style={styles.bicyclePriceContainer}>
            <Text style={styles.bicycleCurrency}>$</Text>
            <Text style={styles.bicyclePrice}>{bike.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };


export  function Home() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter bikes based on the selected category
    const filteredBikes = data.categories.find(
      (category) => category.title === selectedCategory
    )?.bikes || [];
    return (
		<SafeAreaView 
		style={styles.container}
		>
			<View style={styles.container1}>
		
	
		<View style={styles.header}>
        <AntDesign name="search1" size={25} color="black" />
			<FontAwesome name="motorcycle" size={30} />
			<View style={styles.headerIcons}>
			
				<IonIcon name="notifications-outline" size={25} />
			</View>
		</View>
		<View style={styles.title}>
			<Text style={styles.titleText}>The World's</Text>
			<Text style={[styles.titleText, { color: "#F59E0B", fontSize: 24, fontWeight: "bold" }]}> Best Bike</Text>
		</View>
        <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <FlatList
                data={data.categories}
                renderItem={({ item }) => (
                    <Category
                        item={item}
                        onPress={(title) => setSelectedCategory(title)}
                        selected={selectedCategory}
                    />
                )}
                keyExtractor={(item) => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesList}
            />
        </View>
        <View style={styles.bicycleListContainer}>
    <FlatList
        data={filteredBikes}
        renderItem={({ item }) => <BicycleCard bike={item} />}
        keyExtractor={(item) => item.name}
        style={styles.bicycleList}
        numColumns={2} // Display 2 items per row
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Add space between items
    />
</View>

	
	</View>
	
	</SafeAreaView>
    );
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
},
	container1: {
		paddingHorizontal: 20,
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
    bicycleCardContainer: {
        backgroundColor: "#E5E7EB",
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
        width: "48%",
  
        marginHorizontal: 5,
        marginBottom: 10,
    },
    bicycleHeartContainer: {
        width: "100%",
        alignItems: "flex-end",
    },
    bicycleHeartIcon: {
        borderRadius: 999,
        backgroundColor: "#FFFFFF",
        padding: 5,
    },
    bicycleImage: {
        width: 120,
        height: 120,
        resizeMode: "cover",
    },
    bicycleDetailsContainer: {
        marginTop: 10,
        alignItems: "center",
    },
    bicycleName: {
        color: "#6B7280",
        fontSize: 18,
    },
    bicyclePriceContainer: {
        flexDirection: "row",
        marginTop: 5,
    },
    bicycleCurrency: {
        color: "#F59E0B",
        fontWeight: "bold",
        fontSize: 18,
    },
    bicyclePrice: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 18,
    },

});
