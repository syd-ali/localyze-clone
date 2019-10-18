import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

import styles from './styles';
import PlaylistCardList from '../../Components/PlaylistCardList';

class VideoOnDemandScreen extends Component{
  state = {
    postList: [],
    loading: true
  }

  async componentDidMount(){
    try {
      const postApiCall = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-16&sortBy=publishedAt&apiKey=4060bf8630324f66a96bcaa59e51290e');
      const post = await postApiCall.json();
      this.setState({ postList: post.articles, loading: false });
      console.log(post.articles);
    } catch(err) {
      console.log("error...",err);
    }
  }

  render() {
    const { postList, loading } =this.state;

    return(
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.mainContainer}>
        <PlaylistCardList data={postList} />
      </ScrollView>
    )
  }
}

export default VideoOnDemandScreen;
