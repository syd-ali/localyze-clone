import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import PlaylistCard from '../PlaylistCard';

const PlaylistCardList = ({ data }) => {
  return(
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Playlist Demo 1</Text>
      <FlatList
        data={data}
        renderItem={(data) => <PlaylistCard {...data.item} />}
        keyExtractor= {item => item.title}
        horizontal= {true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default PlaylistCardList;
