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

let album_names = [];
let album_posters = [];
let artist_results = [];
let album_tracklist_links = [];
let albums = [];

const fetchArtist = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=oliver%20mtukudzi';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6a1fa6563msh824d08510a0316dp1a8e00jsn034c951916ee',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
        }
    

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        artist_results = result['data'];//['profile']['name']
        console.log(result);
        console.log(response.ok)
        //console.log(result.length)
        //console.log(artist_results.length)

        let i = 0;
        //let j = 0;

        if (response.ok)
        {
            //while (i < result.length)
            //{
                 while (i < artist_results.length)
                 {
                     //console.log(artist_results[i]['data']['profile']['name'])
                      if (artist_results[i]['data'][i]['artist']['name'].includes('Oliver Mtukudzi')) //&& (artist_results[i]['data']['profile']['name'].includes('Oliver')))
                      {
                          
                          album_names.push(artist_results[i]['data'][i]['album']['title'])
                          album_posters.push(artist_results[i]['data'][i]['album']['cover'])
                          album_tracklist_links.push(artist_results[i]['data'][i]['album']['tracklist'])
                      }
                      else
                      {
                          console.log("Pakaipa boys")
                      }
                      i++;
                //     //j++;
                 }
            //}
        }
    } catch (error) {
        console.error(error);
    }
}

export default function Header() {
    return (
         <View style={styles.main}>
            <TouchableHighlight
             style={styles.button}
             onPress={fetchArtist}
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