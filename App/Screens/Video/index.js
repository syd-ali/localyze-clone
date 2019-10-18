import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class VideoScreen extends Component{
  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.labelText}>Video</Text>
      </View>
    )
  }
}

export default VideoScreen;
