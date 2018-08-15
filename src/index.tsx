import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import { openDB } from './indexeddb';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
// console.log("db result: ", openDB());