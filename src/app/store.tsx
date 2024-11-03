import { configureStore,createAsyncThunk,combineReducers } from '@reduxjs/toolkit';

import { persistReducer,persistStore,REGISTER,PURGE,PAUSE,REHYDRATE,PERSIST } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage'
import userdata from './userdata'
import news from './news'

const persistConfig = {
  key: 'rootx',
  storage:AsyncStorage
  
}

const allReducer = combineReducers({
    userdata:userdata,
    news:news
    
})


const persistedReducer = persistReducer(persistConfig, allReducer)



export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for DevTools compatibility
    }).concat(/* Other middleware if needed */),
 
});


export const persistor = persistStore(store);

