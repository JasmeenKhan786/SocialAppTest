import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Reset from '../screens/Reset';
import Display from '../screens/Display';
import Form from '../screens/Form';
import Login from '../screens/Login';
import CustomSideBarMenu from './CustomSideBarMenu';

import Icon from '@expo/vector-icons/FontAwesome5';

export const AppDrawer = createDrawerNavigator({ 
  Home : {
    screen : Display,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
    Setting : {
      screen : Reset,
      navigationOptions:{
        drawerIcon : <Icon name="settings" type ="fontawesome5" />,
        drawerLabel : "Settings"
      }
  }
},
{
  contentComponent:CustomSideBarMenu
},
  {
    initialRouteName : 'Home',
    unmountInactiveRoutes:true,
    headerMode:"none"
    
  })