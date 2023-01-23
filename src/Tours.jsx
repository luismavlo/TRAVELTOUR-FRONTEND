import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { AppRouter } from './routes/AppRouter';

export const Tours = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
