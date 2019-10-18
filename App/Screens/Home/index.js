import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class HomeScreen extends Component{
  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.labelText}>Home</Text>
      </View>
    )
  }
}

export default HomeScreen;
