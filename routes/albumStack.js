import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Home from '../screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Albums from '../screens/albums';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tracklist from '../screens/tracklist';
//import { Text } from 'react-native-reanimated/lib/typescript/Animated';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const openDrawer = () => {}
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Albums" component={Albums} />
    </Drawer.Navigator>
  );
}


export default function Albumstack() {
  //fetchAlbums
  //console.log("Testing the vibes")
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Albums" component={Albums}  options={{
          title: 'ALBUMS',
          headerStyle: {
            backgroundColor: 'black', // Customize the header background color
          },
          headerTitleStyle: {
            color: 'white', // Customize the header title color
          },
          
        }}/>
      <Stack.Screen name="Tracklist" component={Tracklist} options={{
          title: 'TRACKLIST',
          headerStyle: {
            backgroundColor: 'black', // Customize the header background color
          },
          headerTitleStyle: {
            color: 'white', // Customize the header title color
          },
          
        }} />
    </Stack.Navigator>
//   </NavigationContainer>
   );
  
}
