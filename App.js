
import React from 'react';
import { StyleSheet, Text, View ,Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import * as Font from 'expo-font';
import AppLoading from './screens/AppLoading';
import Login from './screens/Login';
import Form from './screens/Form';
import {AppDrawer} from './components/AppDrawer';



export default class App extends React.Component{
  constructor(){
super();
this.state = {
  isFontLoaded:false,
}

  }

  
  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./fonts/Montserrat-Medium.otf'),
      'Regular' : require('./fonts/Montserrat-Regular.otf')
    });
    this.setState({isFontLoaded:true})
  }
render(){
        return(
          (this.state.isFontLoaded === true) ? (<AppContainer/>):(<AppLoading/>)
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  header:{
    width:"100%",
    height:60,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20
  }
});



const switchNavigator = createStackNavigator({
  Login: {screen: Login},
  Form:{screen:Form},
  Drawer:{screen: AppDrawer}
})

const AppContainer =  createAppContainer(switchNavigator);
