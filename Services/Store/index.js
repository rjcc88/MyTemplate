// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

// import { apiSlice } from '../api/apiSlice'

// import authReducer from '../api/Auth/Redux/authSlice'

// const reducers = combineReducers({
//   [apiSlice.reducerPath]: apiSlice.reducer,
//   auth: authReducer
// })

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,

// }

// const persistedReducer = persistReducer(persistConfig, reducers)

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware => {
//     const middlewares = getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(apiSlice.middleware)

//     return middlewares
//   },
// })

// const persistor = persistStore(store)

// setupListeners(store.dispatch)
// export { store, persistor }

import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../api/Auth/Redux/authSlice'

export const store = configureStore({
    reducer: {
        userAuth: authSlice
    },
})