import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { styleSlider } from "../styles";

export default function SliderComponent(props) {
 // var [slider, setSlider] = React.useState(0);

/*   React.useEffect((slider) => {
   props.updateStateFromChild(slider)
  });  */
//  var [slider, setSlider] = React.useState(0);
  return (
    <View style={styles.container}>
      <Slider
        style={{ width: 300, height: 30 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#00f"
        maximumTrackTintColor="#f00"
        onValueChange={(value) => {
          props.updateStateFromChild(parseInt(value * 10));
          
        }}
      />
      <Text style={styles.text}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ...styleSlider,
});

/* 
background: {
  backgroundColor: "#E5E5E5",
  marginTop: "5%",
},
container: {
  flex: 1,
  marginTop: Constants.statusBarHeight,
  margin: "2%",
},
title: {
  backgroundColor: "#9378FF",
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
  textAlign: "left",
  color: "#fff",
  padding: 4,
  fontWeight: "bold",
  fontSize: 20,
},
description: {
  backgroundColor: "#fff",
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  textAlign: "justify",
  color: "#9378FF",
  padding: 12,
  fontSize: 15,
},
avatar: {
  flexDirection: "row",
  margin: "2%",
},
text: {
  color: "#222",
  padding: 4,
  marginLeft: 20,
  textAlign: "center",
  fontSize: 20,
}, */
