import React, { PropsWithChildren } from 'react';
import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import { RenderOptions, render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { RootReducerType, RootStoreType } from '../../src/store/store.hooks';
import rootReducer from '../../src/store/reducer';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootReducerType>;
  store?: RootStoreType;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): React.ReactElement => {
    return <Provider store={store}>{children}</Provider>;
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
