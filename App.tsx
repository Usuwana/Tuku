
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
//import { Text } from 'react-native-reanimated/lib/typescript/Animated';

const Stack = createStackNavigator();

const openDrawer = () => {}


export default function App() {
  //fetchAlbums
  //console.log("Testing the vibes")
  return (
    <NavigationContainer>
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
                source={require('./assets/menu.png')}
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }}/>
      <Stack.Screen name="Albums" component={Albums} />
    </Stack.Navigator>
  </NavigationContainer>
  );
  
}



const styles = StyleSheet.create({
  abouthead: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 0,
    fontSize: 20
  },
  aboutpara: {
    paddingLeft: 30,
    paddingEnd: 30,
    color: 'white',
    paddingBottom: 20
  },
  header: {
    position: 'absolute',
    //flex: 1
  },
  top: {
    flex: 1,
    //position: 'absolute',
    backgroundColor: 'black'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  arrow: {
     position: 'relative',
    color: 'white',
    
  },
  arrowimg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '50%',
    marginRight: '50%',
    paddingTop: 0,
    width: 30,
    height: 30,
    alignSelf: 'center',
    paddingBottom: 0
  },
  homeimg: {
    //flex: 1,
       //alignItems: 'center',
      flexDirection: 'row',
     backgroundColor: 'blue',
     opacity: 1,
    width: 500, // Set the desired width
    height: 500, // Set the desired height
    //resizeMode: 'cover',
    paddingStart: 0,
    paddingBottom: 0
    
}
});

