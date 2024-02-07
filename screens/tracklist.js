import { View, Text, FlatList, Button, ActivityIndicator, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { useState, useEffect } from "react";

export default function Tracklist(route) {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { params } = route;
  //console.log(route.route.params.params);

  useEffect(() => {
	const fetchTracks = async() => {
		const base = 'https://deezerdevs-deezer.p.rapidapi.com/album/';
		const routee = route.route.params.params;
		const url = `${base}${routee}`;


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'e6a1fa6563msh824d08510a0316dp1a8e00jsn034c951916ee',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		setData(result);
		setIsLoading(false);
		 console.log("Working");
		 console.log(result);
		// console.log(result.id);
		// console.log(result.label);
		// console.log(result.contributors);
		//  console.log(result.tracks.data);
		console.log(result.tracks.data.map((track) => track.title.toString()));
	} catch (error) {
		console.error(error);
		setIsLoading(false);
	}
	}

	fetchTracks();
  }, [params]);

  const renderItem = ({ item }) => {
	
	  return (
		<View>
		<Text>{item.title}</Text>
	  </View>

	
	  )
}  



   if (isLoading) {
     return <ActivityIndicator size="large" />;
   }

  return (
    
    <View>
		<Image
                  source={{ uri: data.cover_big }}
                   style={styles.cardImage}
                />
				
     <FlatList
    data={data.tracks.data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()}
	// keyExtractor={(item) => {
	// 	const flatTrackIds = item.tracks.data.map((track) => track.id.toString());
	// 	return flatTrackIds.join('-'); // Combine track ids into a string for the key
	//   }}
    />  
	
    </View>
    );
}

const styles = StyleSheet.create({
	cardImage: {
	  width: 200, // set your desired width
	  height: 200, // set your desired height
	},
  });
