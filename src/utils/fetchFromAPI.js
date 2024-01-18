import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'AIzaSyDl0CuCLpDdsUyfuW5-XI5i6pZ0hlQqebQ',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI =async(url) => {

    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}