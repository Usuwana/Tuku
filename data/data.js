
let album_names = [];
let album_posters = [];
let artist_results = [];
let album_ids = [];
let album_tracklist_links = [];
let albums = [];

export async function fetchArtist  () {
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
        //console.log(response.ok)
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
                          album_ids.push(artist_results[i]['data'][i]['album']['id'])
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