import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

export default function Homemain(){
    return (
        <View style={styles.main}>
            <Image style={styles.homeimg} source={require('../assets/Tukumain.png')} resizeMode="contain" />
            
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
       backgroundColor: 'black',
       position: 'absolute',
       flex: 1
    },
    homeimg: {
        // flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
        // position: 'relative',
        // top: 100,
        // left: 0,
        // right: 0,
        // bottom: 0,
        // backgroundColor: 'black'
        width: Dimensions.get('window').width * 0.8,
        height: 200
        
    }
})