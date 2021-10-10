import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { darkModeReducer } from './slices/dark-mode/darkMode';
import { filesReducer } from './slices/files/files';

const persistConfig = {
  key: 'root',
  storage,
};

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;
