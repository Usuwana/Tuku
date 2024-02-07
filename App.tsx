
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
import { createStackNavigator } from '@react-navigation/stack';
import Albums from './screens/albums';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import Homestack from './routes/homeStack';
//import DrawerNavigator from './routes/drawernavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tracklist from './screens/tracklist';
import Albumstack from './routes/albumStack';
//import { Text } from 'react-native-reanimated/lib/typescript/Animated';

const Stack = createStackNavigator();
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
       screenOptions={{
         
        tabBarStyle: {
          backgroundColor: 'black',  // Background color of the tab bar
        },
      }}
       >
       
        <Tab.Screen name="Home" component={Home} options={{
          //headerShown: false,
      tabBarLabel: 'Home',
      tabBarActiveBackgroundColor: 'grey',
      headerStyle: {
        backgroundColor: 'black', // Set your desired background color
        
      },
      headerTitleStyle: {
        color: 'white', // Set the color of the tab bar label
      },
      tabBarIcon: ({ color, size }) => (
        <Image
                source={require('./assets/home.png')}
                style={{ minWidth: 15, minHeight: 15, maxWidth: 25, maxHeight: 25, tintColor: 'white',}}
              />
      ),
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'white'
    }} />
        <Tab.Screen name="Albumstack" component={Albumstack}  options={{
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
     <Tab.Screen
          name="Tracklist"
          component={Tracklist}
          options={{ tabBarItemStyle: { display: 'none' } , headerShown: false,}}
          
        />
      </Tab.Navigator>
      
     
  </NavigationContainer>
  );
  
}





