import { View, Text, FlatList, Button, ActivityIndicator, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import React, { useState, useEffect } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

export default function Tracklist(route) {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { params } = route;
  const isFocused = useIsFocused();
  //console.log(route.route.params.params);

  useEffect(() => {

	if (isFocused) {
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
			 //console.log("Working");
			 //console.log(result);
			// console.log(result.id);
			// console.log(result.label);
			// console.log(result.contributors);
			//  console.log(result.tracks.data);
			//console.log(result.tracks.data.map((track) => track.title.toString()));
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
		}
	
		fetchTracks();
	}
	return () => {
		// Your cleanup code (if needed)
		console.log('Screen will unmount or lose focus');
		setData(); // Reset your state to the initial value
		setIsLoading(true);
	  };
	
  }, [params, isFocused]);

//   useFocusEffect(
//     React.useCallback(() => {
//       return () => {
//         setData(''); // Reset your state to the initial value
// 		setIsLoading(true);
//       };
//     }, [])
//   );

  const renderItem = ({ item }) => {
	
	  return (
		<View style={styles.card}>
		<Text style={styles.text}>{item.title}</Text>
		{/* <Text style={styles.duration}>{item.duration}</Text> */}
	  </View>

	
	  )
}  



   if (isLoading) {
     return <ActivityIndicator size={100} style={styles.indicator} />;
   }

  return (
    
    <View style={styles.page}>
		 <LinearGradient
      colors={['darkgrey', 'black',]}  // Specify your start and end colors
      style={styles.container}
	  //start={{ x: 0, y: 0 }}
	  //end={{ x: 0, y: 0.9 }}
	  >
		<View style={styles.background}>
		<Image
                  source={{ uri: data.cover_big }}
                   style={styles.cardImage}
                />
		</View>
		<Text style={styles.title}>{data.title}</Text>
		</LinearGradient>
			
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

const cardMargin = 30;

const styles = StyleSheet.create({
	cardImage: {
	  width: 300, // set your desired width
	  height: 300, // set your desired height
	  alignSelf: 'center',
	  
	},
	page: {
		flex: 1,
		backgroundColor: 'black',
		...StyleSheet.absoluteFillObject
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 24
	},
	text: {
		marginStart: 10
	},
	duration: {
		marginLeft: 'auto',
	},
	card: {
		margin: 5,
		backgroundColor: '#fff',
		flexDirection: 'row',
		elevation: 400,
		borderRadius: 5,
		height: 20
	  },
	background: {
		//backgroundColor: 'darkgrey'
	  },
	  indicator: {
		flex: 1
	  }
	  
  });
