import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import Course from './components/Course';
import Terminal from './components/Terminal';
import reducers from './reducers';
import './stylesheets/index.css';

// Create Store with Middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1 className="logo">SidBot</h1>
      <Course />
      <hr />
      <Terminal />
    </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
