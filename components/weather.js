import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";

export default function weather() {
    const [temp, setTemp] = React.useState('');
    const [weather, setWeather] = React.useState('');
    const [wCity, setWCity] = React.useState('');
    const [city, setCity] = React.useState('Helsinki'); 
    const [url, setUrl] = React.useState('http://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&APPID=2fd0fe3b3293c6af2288e2de0b925af0');

    const inputChanged = (event) => {
        setCity(event.target.value);
    }

    const image = ""

    React.useEffect(() => {
        setUrl('http://api.openweathermap.org/data/2.5/weather?lang=fi&q='+city+'&units=metric&APPID=2fd0fe3b3293c6af2288e2de0b925af0');
    }, [city]);

    const getWeather = () => {
        fetch(url)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData);
            setTemp("Temp: "+responseData.main.temp+"°C");
            setWeather("Weather: "+responseData.weather[0].main);
            setWCity(responseData.name+' weather')
        .catch(err => console.error(err))
        });
    } 
            
        return (
            <View>
            {/* <input type="text" name="city" 
            value={city} onChange={inputChanged} /> */}
            <Button onPress={getWeather} title="Get weather">Get weather</Button>
            <Text>{wCity}</Text>
            <Text>{temp}</Text>
            <Text>{weather}</Text>
            </View>
        );
    };

