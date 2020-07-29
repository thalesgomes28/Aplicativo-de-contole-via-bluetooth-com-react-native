import * as React from "react";

import { View, StyleSheet, Text, Button } from "react-native";
import Slider from "../components/slider";
import link from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.updateStateFromChild = this.updateStateFromChild.bind(this);
  }
  state = {
    slider1: "",
  };

  /* 
    Função para atualizar o estado para
    que o valor possa ser enviado via bluetooth.
  */
  updateStateFromChild(valueSlider) {
    this.setState({ slider1: valueSlider });
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="group-work" size={24} color="#black" />
      ),
    });
  }

  componentDidUpdate() {
    console.log(this.state.slider1);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Slider
          updateStateFromChild={this.updateStateFromChild}
          value={this.state.slider1}
        ></Slider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

/*   static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
     <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      /> 
    ),
  }; */

/* 
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      headerTitle: 'Dashboard@@',
      headerLeft: <Text>Left</Text>,
      headerRight: (
        <Button onPress = {navigation.toggleDrawer}
        title="Menu"
        color="#fff">
          <Text>Menu</Text>
        </Button>
      ),
      headerTitleStyle: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'normal',
      },

      headerStyle: {
        backgroundColor: '#b5259e',
      },
    }
  }
  */
