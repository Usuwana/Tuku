import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight} from "react-native";
import Navigator from  '../routes/homeStack'; 
import Homestack from "../routes/homeStack";

const handlePress = () => {
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Albums" component={Albums} />
  </Drawer.Navigator>
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

             <Text style={styles.textmain}>Yessir</Text>
         </View>
         
        
        // <Navigator />
    );

    
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        maxHeight: 100,
        minHeight: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    textmain: {
        color: 'red',
        paddingRight: 200,
        fontWeight: 'bold',
        fontSize: 24
    },
    menuimg: {
        minWidth: 20,
        maxWidth: 30,
        minHeight: 20,
        maxHeight: 30
    },
    button: {
       
        padding: 10,
        borderRadius: 5,
      },
});