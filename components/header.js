import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight, Dimensions} from "react-native";
import Navigator from  '../routes/homeStack'; 
import Homestack from "../routes/homeStack";

const handlePress = () => {
//     <Drawer.Navigator>
//     <Drawer.Screen name="Home" component={Home} />
//     <Drawer.Screen name="About" component={About} />
//     <Drawer.Screen name="Albums" component={Albums} />
//   </Drawer.Navigator>
}

export default function Header() {
    return (
         <View style={styles.main}>
            <TouchableHighlight
             style={styles.button}
             onPress={handlePress}
             underlayColor="black"
            >
            <Image style={styles.menuimg} source={require('../assets/menu.png')} />
            </TouchableHighlight>
            <Text style={styles.textmain}>HOME</Text>
        
             
         </View>
         
        
        
    );

    
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        width: Dimensions.get('window').width,
        maxHeight: Dimensions.get('window').height * 0.01,
        minHeight: Dimensions.get('window').height * 0.09,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 0,
        
        
    },
    textmain: {
        textAlign: 'center',
        justifyContent: 'center',
        //alignSelf: 'center',
        color: 'white',
        //marginRight: Dimensions.get('window').width * 0.5,
        fontWeight: 'bold',
        fontSize: 24
    },
    menuimg: {
        minWidth: Dimensions.get('window').width * 0.01,
        maxWidth: Dimensions.get('window').width * 0.08,
        minHeight: Dimensions.get('window').height * 0.01,
        maxHeight: Dimensions.get('window').height * 0.05,
        
    },
    button: {
       
        padding: 10,
        borderRadius: 5,
      },
});