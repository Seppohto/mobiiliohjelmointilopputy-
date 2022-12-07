import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Weather from "./weather";


export default function FrontPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3498db",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        HRC 2022
      </Text>
      {/* Image and it links to about page */}
      <Image source={require("../assets/hrc.png")} />
      < Weather />
    </View>
  );
}
