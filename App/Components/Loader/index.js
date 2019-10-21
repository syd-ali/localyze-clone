import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

class Loader extends Component{
  render() {
    return(
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size="large"
        />
      </View>
    )
  }
}

export default Loader;
