import 'react-native-gesture-handler';
import React from "react";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_500Medium,
  Overpass_600SemiBold,
  Overpass_700Bold
} from "@expo-google-fonts/overpass";
import theme from "./src/theme";
import {Routes} from "./src/routes";

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_500Medium,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

