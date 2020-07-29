import * as React from 'react';

import { View, Text, Button } from 'react-native';
import Slider from "../components/slider"
import link from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons';

function nunu(params) {
  console.log(params)
}
export default class Screen2 extends React.Component {

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
  constructor(props) {
    super(props);
    this.state = '';
  }

componentDidMount(){
  this.props.navigation.setOptions({
    title:'buc',
    headerRight: (
      <Button onPress = {this.props.navigation.toggleDrawer}
      title="Menu"
      color="#000">
        <Text>Menu</Text>
      </Button>
    ),
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="group-work" size={24} color="#black" />
   /*    <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      /> */
    ),
  }); 
} 

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
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={()=>{nunu(this.state)}} title = 'bu' ></Button>
        <Slider></Slider>
      </View>
    )}
}
