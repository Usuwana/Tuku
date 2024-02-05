
import 'react-native-gesture-handler';
//import 'react-native-reanimated/register';
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

import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Albums from './screens/albums';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import Homestack from './routes/homeStack';
//import DrawerNavigator from './routes/drawernavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Text } from 'react-native-reanimated/lib/typescript/Animated';

//const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const openDrawer = () => {}
// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Albums" component={Albums} />
//     </Drawer.Navigator>
//   );
// }

// const FirstScreenStack = () => {
//   return (
//       <Stack.Navigator
//         initialRouteName="FirstPage"
//         screenOptions={{headerShown: false}}
//       >
//         <Stack.Screen
//           name="FirstPage"
//           component={Home}
//         />
//       </Stack.Navigator>
//   );
// }

// const SecondScreenStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{headerShown: false}}
//     >
//       <Stack.Screen
//         name="SecondPage"
//         component={Albums}/>
      
//     </Stack.Navigator>
//   );
// }


export default function App() {
  //fetchAlbums
  //console.log("Testing the vibes")
  return (
    <NavigationContainer>
       <Tab.Navigator
      
       >
       
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
      tabBarLabel: 'Home',
      tabBarActiveBackgroundColor: 'grey',
      tabBarIcon: ({ color, size }) => (
        <Image
                source={require('./assets/home.png')}
                style={{ minWidth: 15, minHeight: 15, maxWidth: 25, maxHeight: 25, tintColor: 'white',}}
              />
      ),
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'white'
    }} />
        <Tab.Screen name="Albums" component={Albums}  options={{
          headerShown: false,
      tabBarLabel: 'Albums',
      tabBarActiveBackgroundColor: 'grey',
      tabBarIcon: ({ color, size }) => (
        <Image
                source={require('./assets/albums.png')}
                style={{ minWidth: 15, minHeight: 15, maxWidth: 25, maxHeight: 25, tintColor: 'white',}}
              />
      ),
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'white',
    }} />
      </Tab.Navigator>
      {/* <Homestack/> */}
      {/* <DrawerNavigator/> */}
      {/* <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Albums" component={Albums} /> */}
      {/* <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{
            drawerLabel: 'First page Option',
            title: 'First Stack'
          }}
          component={FirstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{
            drawerLabel: 'Second page Option',
            title: 'Second Stack'
          }}
          component={SecondScreenStack} />
      </Drawer.Navigator> */}
  </NavigationContainer>
  );
  
}





