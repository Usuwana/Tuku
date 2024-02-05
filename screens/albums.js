import { View, Text, FlatList, Button, ActivityIndicator } from "react-native";
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
          setData(result.data);
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

  

  const renderItem = ({ item }) => (
   <View>
    <Text>{item.album.title}</Text>
    <FlatList
      data={item.album}
      renderItem={({ item: subItem }) => (
        <View>
          <Text>{subItem.title}</Text>
          {/* Add more components to display other properties */}
        </View>
      )}
      keyExtractor={(subItem) => subItem.id.toString()}
    />
  </View>
  );

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
    
  return (
    
    <View>
     <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.album.id}
    /> 
    <Text>test</Text>
    {/* <Button title='press me' onPress={fetchData}/> */}
    </View>
    );
}

