import { StackNavigationProp } from "@react-navigation/stack";


export interface Bike {
    _id: string;
    category: string;
    description: string;
    image: string;
    name: string;
    price: number;
    
  }
  
 export interface CategoryProps {
    item: { title: string };
    onPress: (title: string) => void;
    selected: string;
  }

export interface Item {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;

  }
  
  export interface SubtotalProps {
    subtotal: number;
    shipping: number;
    total: number;
  }
  
  export interface BicycleCardProps {
    item: Item;

  }

   export type RootStackParamList = {
    BikeDetails: { bike: Bike };
  };
  
  
   export interface BicycleCardProps {
      bike: Bike;
    }
  
   export type BikeDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BikeDetails'>;