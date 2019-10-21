import { combineReducers } from 'redux';

import FetchPlaylistReducer from './FetchPlaylistReducer';

export default combineReducers({
  playList: FetchPlaylistReducer,
});
