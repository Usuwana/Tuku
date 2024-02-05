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


export default function Homestack() {
  //fetchAlbums
  //console.log("Testing the vibes")
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{
          title: 'HOME',
          headerStyle: {
            backgroundColor: 'black', // Customize the header background color
          },
          headerTitleStyle: {
            color: 'white', // Customize the header title color
          },
          headerLeft: () => (
            <TouchableOpacity onPress={openDrawer}>
              {/* Your custom drawer button or image */}
              <Image
                source={require('../assets/menu.png')}
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }}/>
      <Stack.Screen name="Albums" component={Albums} />
    </Stack.Navigator>
//   </NavigationContainer>
   );
  
}
