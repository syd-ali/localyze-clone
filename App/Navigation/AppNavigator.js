 import React from 'react';
 import { createAppContainer } from 'react-navigation';
 import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
 import { createSwitchNavigator, createStackNavigator } from 'react-navigation-stack';

 import {
   HomeScreen,
   VideoScreen,
   SplashScreen,
   VideoOnDemandScreen
 } from '../Screens';

 const MainTab = createBottomTabNavigator({
   Home: {screen: HomeScreen},
   Video: {screen: VideoOnDemandScreen},
 },{
   tabBarOptions: {
     initialRouteName: 'Video',
     activeTintColor: '#000',
     inactiveTintColor: '#ccc'
   }
 });

 // const MainTabContainer = createAppContainer(MainTab);

 const MainSwitch = createStackNavigator({
   Splash: {
     screen: SplashScreen,
   navigationOptions:{
     header: null
   }
 },
   App: {
     screen: MainTab,
   navigationOptions:{
     header: null
   }
 }
 });

const AppNavigator = createAppContainer(MainSwitch);

 export default AppNavigator;
