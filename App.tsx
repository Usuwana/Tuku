
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Header from './components/header';
import Homemain from './components/homemain';



export default function App() {
  return (
    <View>
    <Header/>
    {/* <Homemain/> */}
  </View>

  );
  
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

