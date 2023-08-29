import * as React from 'react';
import { Provider } from 'react-redux';

import store, { persistor } from './src/store/store.index';
import { PersistGate } from 'redux-persist/integration/react';
import AppStack from './src/router/root.index';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  );
}
