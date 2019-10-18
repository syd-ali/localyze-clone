import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const PlaylistCard = ({ title, description, urlToImage }) => {
  return(
    <TouchableOpacity>
      <View style={styles.mainContainer}>
         <View style={styles.imageOuterContainer}>
            <Image source={{uri:urlToImage}} style={styles.imageContainer} />
         </View>
         <Text numberOfLines={2} style={styles.titleText}>{title}</Text>
         <Text numberOfLines={2} style={styles.descText}>{description}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PlaylistCard;
