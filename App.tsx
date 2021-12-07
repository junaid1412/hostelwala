import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import { Toast } from 'react-native-ui-lib';

import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor, RunSaga } from "./src/redux"

import { useColorScheme } from './src/hooks/useColorScheme';
import { useLoadedAssets } from './src/hooks/useLoadedAssets';
import Navigation from './src/navigation';

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();
  const [isConnected, SetisConnected] = React.useState(false)
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      SetisConnected(!state.isConnected);
    });
    RunSaga();
    return () => unsubscribe()
  }, [])
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            <Toast
              visible={isConnected}
              position={'bottom'}
              backgroundColor={"#000"}
              message="No Internet Connection Available"
              onDismiss={() => SetisConnected(false)}
              showDismiss={true}
            />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
