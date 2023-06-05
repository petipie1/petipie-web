import React from 'react';
import '../styles/globals.css';
// import '../styles.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
