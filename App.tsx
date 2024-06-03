import React from 'react';
import NavigationStack from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
}

export default App;
