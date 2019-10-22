/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { WebView } from 'react-native-webview';

const App: () => React$Node = () => {
  return (
    <>
      <WebView
        source={{ uri: 'https://www.idesign-af.com/shop/category?fbclid=IwAR1HsjRh32OOxcsczgy70I1glzgXqXUI3mKUitawqE5qyht7o1-fGFjiBCk' }}
      />
    </>
  );
};
export default App;
