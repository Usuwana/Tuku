import { View, Text, FlatList, Button, ActivityIndicator, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import {fetchArtist} from "../data/data";
import React, { useState, useEffect } from "react";
import {album_names} from "../data/data";
import Tracklist from "./tracklist";
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';

export default function Albums({navigation}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleItemClick = (item) => {
    // Handle click event here
    console.log('Item clicked:', item);
    navigation.navigate('Tracklist', {params: item});
  };

  useEffect(() => {
    // Call the function when the component mounts
    const fetchData = async() => {
      //console.log("whaaaaaaatttt")
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
          //console.log(result)
          const uniqueData = removeDuplicateIds(result.data);
          setData(uniqueData);
          //console.log(uniqueData)
          setIsLoading(false);
          //console.log("lets go")
          //console.log(result.data);
          
      } catch (error) {
          console.error(error);
          setIsLoading(false);
      }
    } 

    fetchData();
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     return () => {
  //       setData(''); // Reset your state to the initial value
  //       setIsLoading(true);
  //     };
  //   }, [])
  // );

  

  const renderItem = ({ item }) => {
      if(item.artist.name.includes('Oliver Mtukudzi'))
      {
        return (
      
            <TouchableWithoutFeedback onPress= {() => handleItemClick(item.album.id)}>
              <View style={styles.card} onPre>
                <Image
                  source={{ uri: item.album.cover_big }}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.album.title}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
      
        )
      }


  }

  const removeDuplicateIds = (apiData) => {
    const uniqueIds = new Set();
    return apiData.filter(item => {
      if (!uniqueIds.has(item.album.id)) {
        //console.log(item.album.id);
        uniqueIds.add(item.album.id);
        return true;
      }
      return false;
    });
  };
   

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
    
  return (
    
    <View style={styles.page}>
      <LinearGradient
      colors={['darkgrey', 'black',]}  // Specify your start and end colors
      style={styles.container}
	  start={{ x: 0, y: 0 }}
	  end={{ x: 0, y: 0.7 }}
	  >
     <FlatList
    data={data}
    numColumns={2}
    renderItem={renderItem}
    keyExtractor={(item) => item.album.id.toString()}
    /> 
    <Text>test</Text>
    {/* <Button title='press me' onPress={fetchData}/> */}
    </LinearGradient>
    </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const cardMargin = 10;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: cardMargin,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: cardMargin,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
  },
  page: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFillObject
  }
});

