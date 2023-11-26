import axios from 'axios';
export const getPlacesData = async (type, sw, ne) => {
  console.log(process.env.REACT_APP_RAPIDAPI_KEY);
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      },
    });
    return data;
  } catch (error) {
    console.log("The API error message",error);
  }
};

