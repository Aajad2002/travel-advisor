import axios from "axios";

//get bounds function used for getting the area in km 
async function getBoundsFromLatLng(lat, lng, radiusInKm) {
    const lat_change = radiusInKm / 111.2;
    const lon_change = +Math.abs(Math.cos(lat * (Math.PI / 180)));
    const bounds = {
        lat_min: lat - lat_change,
        lon_min: lng - lon_change,
        lat_max: parseFloat(lat + lat_change),
        lon_max: parseFloat(lng + lon_change)
    };
    return bounds;
}

async function fetchData(lat, lang, type, radius, setData) {
    const bounds = await getBoundsFromLatLng(lat, lang, radius);
    console.log("Fetched bounds:", bounds);

//fetch the data from lis-in -boundry end from api hotel,restaurants and attractions
    const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${bounds.lat_min}&tr_latitude=${bounds.lat_max}&bl_longitude=${bounds.lon_min}&tr_longitude=${bounds.lon_max}&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'afea268302msh938b5d9be9a9427p19b21cjsnea1e75f763db',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        //set the data for map that
        setData(result.data)

    } catch (error) {
        console.error(error);
    }

}

export default async function API(search, type, radius, setData) {
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/auto-complete',
        params: {
            query: `${search ? search : 'agra'}`,
            lang: 'en_US',
            units: 'km'
        },
        headers: {
            'X-RapidAPI-Key': 'afea268302msh938b5d9be9a9427p19b21cjsnea1e75f763db',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const { latitude, longitude } = response.data.data[0]["result_object"];
        console.log(latitude, longitude);

        // Fetch data and wait for the result
        const data = await fetchData(latitude, longitude, type, radius, setData);
        console.log("main", data);



    } catch (error) {
        console.log(error);

    }
}
