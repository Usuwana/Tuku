import React from "react";
import { View, StyleSheet } from "react-native";

export default function Homemain(){
    return (
        <View style={styles.main}>
            <Image style={styles.homeimg} source={require('../assets/Tukumain.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black'
    }
})