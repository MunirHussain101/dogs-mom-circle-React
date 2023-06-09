import { configureStore, combineReducers} from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import InfoSlice from "../features/additionalnfo/Info";
import postSlice from '../features/posts/postSlice';


import  storage  from 'redux-persist/lib/storage';
import {
  persistReducer,
} from 'redux-persist'


const persistConfig={
  key:'root',
  version:1,
  storage
}

const reducer=combineReducers({
  auth:authSlice,
  info: InfoSlice,
  posts: postSlice
})


const persistedReducer=persistReducer(persistConfig, reducer)

export const store = configureStore({
     reducer:persistedReducer,
})
