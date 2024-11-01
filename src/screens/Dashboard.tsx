import { Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './dashboardScreen/HomeScreen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();


type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;
const Index = ()=>{
    return (
        <Tab.Navigator screenOptions={{ headerShown: false,tabBarStyle: { height: 60,paddingBottom: 10,paddingTop: 10 } }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={20} color={color} />
            ),
          }} />
           <Tab.Screen name="Discover" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="search" size={20} color={color} />
            ),
          }}  />
          <Tab.Screen name="Bookmark" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="shopping-basket" size={20} color={color} />
            ),
          }}  />
            <Tab.Screen name="Settings" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="tools" size={20} color={color} />
            ),
          }}  />
        </Tab.Navigator>
    )
}

export default Index