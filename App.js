import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import * as appReducers from './src/store/reducers';
import { ChatList } from './src/components';
import populateInitialMessage from './src/store/initial-data';
import * as middleware from './src/middleware';

//= ============================================================================
// App initiliaziation logic
//= ============================================================================
const appStore = createStore(
  combineReducers(appReducers),
  applyMiddleware(...Object.values(middleware)),
)
;
populateInitialMessage(appStore);

export const App = () => (
  <Provider store={appStore}>
    <ChatList />
  </Provider>
);

export default App;
