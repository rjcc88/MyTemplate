/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { store, persistor } from './Services/Store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import AppRoute from './Route/Authentication/navigator';


const App = () => {

  return (

    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <AppRoute />
      {/* </PersistGate> */}
    </Provider>

  )
}

export default App;
