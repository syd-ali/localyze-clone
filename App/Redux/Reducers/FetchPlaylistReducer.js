import {
  FETCH_PLAYLIST_BEGIN,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAIL
} from '../ActionTypes';

const initialState = {
  isPlaylistFetching: false,
  playlistData: [],
  playlistError: null,
  playlistErrorMessage: null
};

export default function FetchPlaylistReducer(state = initialState, action){
  switch(action.type){
    case FETCH_PLAYLIST_BEGIN:
      return{
        isPlaylistFetching: true,
        playlistData: null,
        playlistError: false,
        playlistErrorMessage: null
      };

      case FETCH_PLAYLIST_SUCCESS:
        return{
          isPlaylistFetching: false,
          playlistData: action.payload,
          playlistError: false,
          playlistErrorMessage: null
        };

      case FETCH_PLAYLIST_FAIL:
        return{
          isPlaylistFetching: false,
          playlistData: null,
          playlistError: true,
          playlistErrorMessage: action.payload
        };

      default:
        return state;
  }
}
