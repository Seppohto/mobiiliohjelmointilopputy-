import { StyleSheet, Text, View, StatusBar } from "react-native";
import WebView from "react-native-webview";
import { Router, Route, Link } from "../react-router";
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


const Schedule = () => (
    <View>
    <Text>Harjoitukset</Text>
    <Text>Ti 21.30-22.30</Text>
    <Text>To 20-21</Text>
    <Text>Su 17.00-18.30</Text>

    <Text>Treenit peruttu 24-31.12</Text>
    </View>
    );

const Media = () => {
  return (
    <WebView
      style={styles.container}
      javaScriptEnabled={true}
      source={{
        uri: 'https://www.youtube.com/watch?v=zReX8I7SX2k'
      }}
    />
  );
  }

const Map = () => {
  const [location, setLocation] = useState(null); // State where location is saved
  const [latcoordinates, setLatcoordinates] = useState(60.2193125199986) // State where coordinates are saved
  const [longcoordinates, setLongcoordinates] = useState(25.081107371552363) // State where coordinates are saved

  useEffect(() => (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('No permission to get location')
        return;
      }

      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setLocation(location);
      setLatcoordinates(location.coords.latitude)
      setLongcoordinates(location.coords.longitude)
      console.log('Location:', location)
      console.log('Lat:', latcoordinates)
      console.log('Long:', longcoordinates)
    })(), []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView
        style={{
          width: "100%",
          height: "100%",
        }}
        initialRegion={{latitude: latcoordinates,longitude: longcoordinates,latitudeDelta: 0.0322,longitudeDelta: 0.0221,  }}
      >
        <Marker coordinate={{latitude: latcoordinates,longitude: longcoordinates,}} title="HRC player" description="going to training" />

        <Marker coordinate={{latitude: 60.2193125199986,longitude: 25.081107371552363,}} title="HRC @ pallomylly" description="Helsingin Rugby CLub Harjoitus Halli" />
        </MapView>
    </View>
  );  
}


const Homescreen = () => (
  <Router>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/Schedule">
          <Text 
        style={styles.navItem}
        >Schedule </Text>
        </Link>
        <Link to="/media">
          <Text 
        style={styles.navItem}
        >Media</Text>
        </Link>
        <Link to="/map">
          <Text 
        style={styles.navItem}
        >Map</Text>
        </Link>
      </View>      
    </View>
    <Route path="/Schedule" component={Schedule} />
    <Route path="/media" component={Media} />
    <Route path="/map" component={Map} />
  </Router>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#3498db"
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333333",
    textTransform: "uppercase",
  },
});

export default Homescreen;