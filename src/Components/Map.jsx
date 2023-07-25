import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'; // Import the L object from leaflet
import { Box, Image } from '@chakra-ui/react';

const Map = ({ data }) => {

    const [userLocation, setUserLocation] = useState({ lat: 26.9124336, lng: 75.7872709 });
    console.log("data", data)

    useEffect(() => {
        // Set the center of the map to the first location from the data array
        if (data.length > 0) {
            setUserLocation({ lat: data[0].latitude, lng: data[0].longitude });
        }
    }, [data]);

    // Prepare the custom marker icon
    const customIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png', // Path to the custom marker image
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Anchor point of the icon (relative to its size)
        popupAnchor: [0, -32], // Popup anchor point (relative to its size)
    });
    // console.log("map",results)
    return (
        <Box  overflow={"hidden"}  h={["50vh", "93vh"]}  >
            <MapContainer scrollWheelZoom doubleClickZoom center={userLocation} zoom={10} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {data?.map((el, i) => {

                    return el['latitude'] && el['longitude'] && el.photo && el.photo["images"] && <Marker key={i} position={{ lat: el['latitude'], lng: el['longitude'] }}  icon={customIcon}>
                        <Popup>
                            <Image w={"100%"} src={el.photo.images.small.url} alt='hotels' />
                            <p>{el.name}</p>
                            <p>{el["location_string"]}</p>
                        </Popup>
                    </Marker>
                })}
            </MapContainer>
        </Box>
    );
};

export default Map;
