import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as appReducers from './src/store/reducers';
import { ChatList } from './src/components';
import populateInitialMessage from './src/store/initial-data';

//= ============================================================================
// App initiliaziation logic
//= ============================================================================

const appStore = createStore(combineReducers(appReducers));
populateInitialMessage(appStore);

export const App = () => (
  <Provider store={appStore}>
    <ChatList />
  </Provider>
);

export default App;
