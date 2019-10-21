import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import styles from './styles';

class SplashScreen extends Component {

  resetToHome = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'App'
      })
    ]
  });

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.dispatch(this.resetToHome);
      // this.props.navigation.navigate('App');
    }, 4000)
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.labelText}>Splash</Text>
        <Image source={require('../../Images/SplashImage.gif')} style={styles.splashImage} />
      </View>
    )
  }
}

export default SplashScreen;
