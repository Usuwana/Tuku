import { View, Text, FlatList, Button, ActivityIndicator, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { useState, useEffect } from "react";

export default function Tracklist(route) {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { params } = route;
  //console.log(route.route.params.params);

  useEffect(() => {
	// console.log(params)
	 //console.log("yes")
	//  const base = 'https://deezerdevs-deezer.p.rapidapi.com/album/';
	// 	const routee = route.route.params.params;
	// 	const url = `${base}${routee}`;

		//console.log(url);
	const fetchTracks = async() => {
		//console.log('ayyyyyeeee')
		const base = 'https://deezerdevs-deezer.p.rapidapi.com/album/';
		const routee = route.route.params.params;
		const url = `${base}${routee}`;

		//console.log(url);

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
		//console.log(result.tracks.data)
		setIsLoading(false);
		//console.log("Working");
		//console.log(result.tracks.data.title);
	} catch (error) {
		console.error(error);
		setIsLoading(false);
	}
	}

	fetchTracks();
  }, [params]);

  const renderItem = ({ route }) => {
	//if(item.artist.name.includes('Oliver Mtukudzi'))
	//{
		//console.log(route.tracks.data)
	  return (
	
			  
			  <View>
				<Text>{route.tracks.data.title}</Text>
			  </View>

	
	  )
	//}


}  



   if (isLoading) {
     return <ActivityIndicator size="large" />;
   }

  return (
    
    <View>
	<Text>test</Text>
     <FlatList
    data={data}
    //numColumns={2}
    renderItem={renderItem}
    keyExtractor={(route) => route.tracks.data.id.toString()}
    />  
    <Text>test</Text>
    {/* <Button title='press me' onPress={fetchData}/> */}
    </View>
    );
}
