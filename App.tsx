import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";

import {persistor, store} from "./src/store/store.index";
import {PersistGate} from "redux-persist/integration/react";
import AppStack from "./src/router/root.index";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
