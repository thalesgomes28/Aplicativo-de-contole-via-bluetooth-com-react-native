import React from "react";
import { Text, View } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
} from "@expo-google-fonts/roboto";

() => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: "Roboto_400Regular", fontSize: 28 }}>
          Nice! Support for Google Fonts!
        </Text>
      </View>
    );
  }
};

const fonts = {
  size: {
    input: 22,
    regular: 20,
    medium: 16,
    small: 14,
    tiny: 12,
  },
};

export default fonts;

// Exemplo de como importar ima fonte baixada do google fonts:

/*   import React from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default props => {
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Inter-Black', fontSize: 40 }}>
          Inter Black
        </Text>
        <Text style={{ fontSize: 40 }}>Platform Default</Text>
      </View>
    );
  }
}; */
