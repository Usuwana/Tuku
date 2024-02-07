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
  Button
} from 'react-native';
import {fetchArtist} from "../data/data";
import LinearGradient from 'react-native-linear-gradient';

export default function Home(){
  fetchArtist
  //console.log("Testing the vibes")
  return (
    //console.log("go there"),
    <SafeAreaView style={styles.top}>
      <ScrollView>
      <LinearGradient
      colors={['darkgrey', 'black',]}  // Specify your start and end colors
      style={styles.container}
	  start={{ x: 0, y: 0 }}
	  end={{ x: 0, y: 0.7 }}
	  > 
      {/* <Header/> */}
      <Image style={styles.homeimg} source={require('../assets/oliver-mtukudzi.jpg')}/>
      <Image style={styles.arrowimg} source={require('../assets/arrow.png')} />
      <View style={styles.main}>
        <Text style={styles.abouthead}>About Oliver Mtukudzi</Text>
        <Text style={styles.aboutpara}>Oliver Mtukudzi, born on September 22, 1952, in Highfield, a suburb of Harare, Zimbabwe, emerged as one of the most influential and beloved figures in Zimbabwean music. Fondly known as "Tuku," he grew up in a culturally rich environment, surrounded by the vibrant sounds and rhythms of traditional Shona music.</Text>
        <Text style={styles.aboutpara}>
        Mtukudzi's journey in music began at an early age, and he quickly mastered various instruments, including the guitar, which would become his signature instrument. His exceptional talent and dedication to his craft soon gained recognition, and by the 1970s, he had established himself as a prominent artist in the Zimbabwean music scene.
        </Text>
        <Text style={styles.aboutpara}>
        Beyond the realm of music, Mtukudzi became a cultural icon and a source of inspiration for many Zimbabweans. His music, characterized by profound lyrics and a fusion of traditional rhythms with modern influences, resonated deeply with the people. He addressed social issues, love, and the complexities of life in Zimbabwe, earning him a special place in the hearts of his fellow countrymen.
        </Text>
        <Text style={styles.aboutpara}>
        Oliver Mtukudzi's significance goes beyond his musical prowess; he became a unifying force in Zimbabwe, fostering a sense of national identity and pride through his compositions. His songs often carried messages of hope, resilience, and the celebration of cultural heritage.
        </Text>
        <Text style={styles.aboutpara}>
        Internationally, Mtukudzi transcended the boundaries of Zimbabwean music, captivating audiences worldwide with his unique sound. He collaborated with artists from diverse backgrounds, contributing to the global appreciation of African music. His influence extended beyond the music industry, making him a respected ambassador for Zimbabwean culture on the international stage.
        </Text>
        <Text style={[styles.aboutpara, {paddingBottom: 70}]}>
        Oliver Mtukudzi's legacy endures not only through his extensive discography but also through the countless lives he touched with his music. He passed away on January 23, 2019, leaving behind a profound impact on the world of music and a lasting imprint on the hearts of Zimbabweans, who continue to celebrate his contributions to their cultural heritage.
        </Text>

      </View>
      </LinearGradient>
      </ScrollView>
       
    </SafeAreaView>
    

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