
import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  SafeAreaView
} from 'react-native';
import Header from './components/header';
import Homemain from './components/homemain';
//import { Text } from 'react-native-reanimated/lib/typescript/Animated';



export default function App() {
  return (
    <SafeAreaView style={styles.top}>
      <Header/>
      {/* <Image style={styles.homeimg} source={require('./assets/Tukumain.png')} resizeMode="contain" /> */}

       {/* <View style={styles.main}>  */}
         {/* <Homemain/>  */}
         <Image style={styles.homeimg} source={require('./assets/Tukumain.png')} resizeMode="contain" />
      {/* </View>  */}
       
    </SafeAreaView>
    

  );
  
}



const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    flex: 1
  },
  top: {
    flex: 1,
    //position: 'absolute',
    backgroundColor: 'blue'
  },
  main: {
    flex: 1,
    position: 'relative',
    // justifyContent: 'center',
    // alignItems: 'center', 
    flexDirection: 'row',
    //alignItems: 'center',
  },
  
  arrow: {
    // flex: 0,
    // justifyContent: 'center',
    
    // alignItems: 'center',
     position: 'relative',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // backgroundColor: 'black',
    color: 'white',
    
  },
  homeimg: {
     //flex: 1,
    //  justifyContent: 'center',
       alignItems: 'center',
    //  position: 'relative',
      flexDirection: 'row',
    // top: 100,
    // left: 0,
    // right: 0,
    // bottom: 0,
     backgroundColor: 'black',
     opacity: 1,
    width: 500, // Set the desired width
    height: 500, // Set the desired height
    resizeMode: 'cover',
     
    
}
});

