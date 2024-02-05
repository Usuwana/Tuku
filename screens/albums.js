import { View, Text, FlatList, Button, ActivityIndicator, Image, StyleSheet, Dimensions } from "react-native";
import {fetchArtist} from "../data/data";
import { useState, useEffect } from "react";
import {album_names} from "../data/data";

export default function Albums() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Call the function when the component mounts
    const fetchData = async() => {
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
          const uniqueData = removeDuplicateIds(result.data);
          setData(uniqueData);
          setIsLoading(false);
          console.log("lets go")
          //console.log(result.data);
          
      } catch (error) {
          console.error(error);
          setIsLoading(false);
      }
    } 

    fetchData();
  }, []);

  

  const renderItem = ({ item }) => {
      if(item.artist.name.includes('Oliver Mtukudzi'))
      {
        return (
          <View style={styles.card}>
        <Image
          source={{ uri: item.album.cover_big }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.album.title}</Text>
        </View>
      </View>
        )
      }


  }

  const removeDuplicateIds = (apiData) => {
    const uniqueIds = new Set();
    return apiData.filter(item => {
      if (!uniqueIds.has(item.album.id)) {
        uniqueIds.add(item.album.id);
        return true;
      }
      return false;
    });
  };
   
  //  <View>
  //   <Text>{item.album.title}</Text>
  //   <Image
  //       source={{ uri: item.album.cover }}
  //       style={{ width: 200, height: 200 }}
  //     />
  //   {/* <FlatList
  //     data={item.album}
  //     renderItem={({ item: subItem }) => (
  //       //console.log(subItem.cover),
  //       <View>
  //         <Text>{subItem.title}</Text>
  //         <Image
  //       source={{ uri: subItem.cover }}
  //       style={{ width: 200, height: 200 }}
  //     />
  //       </View>
  //     )}
  //     keyExtractor={(subItem) => subItem.id.toString()}
  //   /> */}
  // </View>
  //);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
    
  return (
    
    <View>
     <FlatList
    data={data}
    numColumns={2}
    renderItem={renderItem}
    keyExtractor={(item) => item.album.id.toString()}
    /> 
    <Text>test</Text>
    {/* <Button title='press me' onPress={fetchData}/> */}
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
});

