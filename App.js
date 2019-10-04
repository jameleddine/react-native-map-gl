/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MapBox from './src/component/mapBox'
import {View, Image, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import DetailScreen from "./src/component/DetailScreen";

class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
  constructor(){
    super();
  
  }

render() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
        {/*Donute Button Image */}
        <Image
          source={require('./src/assets/image/drawer.png')}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}
}

const FirstActivity_StackNavigator = createStackNavigator({
//All the screen from the Screen1 will be indexed here
First: {
  screen: MapBox,
  navigationOptions: ({ navigation }) => ({
    title: 'Map Box',
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#FF9800',
    },
    headerTintColor: '#fff',
  }),
},
});

const Screen2_StackNavigator = createStackNavigator({
//All the screen from the Screen2 will be indexed here
Second: {
  screen: DetailScreen,
  navigationOptions: ({ navigation }) => ({
    title: 'Detail Room',
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#FF9800',
    },
    headerTintColor: '#fff',
  }),
},
});



const DrawerNavigatorExample = createDrawerNavigator({
//Drawer Optons and indexing
Screen1: {
  //Title
  screen: FirstActivity_StackNavigator,
  navigationOptions: {
    drawerLabel: 'Dispaly Map',
  },
},
Screen2: {
  //Title
  screen: Screen2_StackNavigator,
  navigationOptions: {
    drawerLabel: 'Go details',
  },
},

});

//  export default App(DrawerNavigatorExample);
 export default createAppContainer(DrawerNavigatorExample);
