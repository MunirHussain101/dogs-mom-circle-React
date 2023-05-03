import { configureStore, combineReducers} from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import InfoSlice from "../features/additionalnfo/Info";
import formSlice from '../features/multi-step-form/formSlice';
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
  form: formSlice,
  posts: postSlice
})


const persistedReducer=persistReducer(persistConfig, reducer)

export const store = configureStore({
     reducer:persistedReducer,
})



// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
