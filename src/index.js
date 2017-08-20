import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

import reducer, {
  initialLoad,
  initialState
} from './reducer';

import events from './events.js';

const store = createStore(reducer, initialState);

store.dispatch(initialLoad(events));

const render = () => {
  ReactDOM.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch}
    />, document.getElementById('root')
  );
};

render();
store.subscribe(render);

registerServiceWorker();
