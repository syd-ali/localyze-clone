import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import PlaylistCardList from '../../Components/PlaylistCardList';
import { FetchPlaylist } from '../../Redux/Actions/FetchPlaylistAction';
import Loader from '../../Components/Loader';

class VideoOnDemandScreen extends Component{

  componentDidMount(){
    this.props.FetchPlaylist();
  }

  render() {
    const { playlistData, isPlaylistFetching, playlistError, playlistErrorMessage } = this.props;

    if(playlistError){
      return <View><Text>Error...</Text></View>
    }

    if(isPlaylistFetching){
      return <Loader />
    }

    return(
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.mainContainer}>
        <PlaylistCardList data={playlistData.articles} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state =>({
  playlistData : state.playList.playlistData,
  isPlaylistFetching: state.playList.isPlaylistFetching,
  playlistError: state.playList.playlistError,
  playlistErrorMessage: state.playList.playlistErrorMessage
});

export default connect(mapStateToProps, {FetchPlaylist})(VideoOnDemandScreen);
