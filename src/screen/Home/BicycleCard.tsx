import { TouchableOpacity, View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Bike, BikeDetailsScreenNavigationProp } from '../../Type';


interface BicycleCardProps {
  bike: Bike;
}



const BicycleCard: React.FC<BicycleCardProps> = ({ bike }) => {
  const navigation = useNavigation<BikeDetailsScreenNavigationProp>();

  const handleCardPress = () => {
    navigation.navigate('BikeDetails', { bike });
  };

    return (
      <TouchableOpacity
        style={styles.bicycleCardContainer}
        // Add onPress event handler if needed
        onPress={handleCardPress}
      >
  
        <Image
                source={{ uri: bike.image }} 
                style={styles.bicycleImage} 
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



const styles = StyleSheet.create({
    bicycleCardContainer: {
       
        backgroundColor: "#FFFFFF",
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
        width: "100%",
        height: 100,
        resizeMode: "contain",
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

export default BicycleCard;
