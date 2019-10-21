import {
  FETCH_PLAYLIST_BEGIN,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAIL
} from '../ActionTypes';

export function FetchPlaylist(){
  return dispatch => {
    dispatch({ type: FETCH_PLAYLIST_BEGIN });

    return fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-21&sortBy=publishedAt&apiKey=4060bf8630324f66a96bcaa59e51290e')
    .then(res => res.json())
    .then(resJson => {
      dispatch({ type: FETCH_PLAYLIST_SUCCESS, payload: resJson })
    })
    .catch(err => {
      dispatch({ type: FETCH_PLAYLIST_FAIL, payload: err })
    });
  }
}
