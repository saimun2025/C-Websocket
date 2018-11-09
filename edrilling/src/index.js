import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Custom from './custom';
//import { runWithAdal } from 'react-adal';
//import { authContext } from './adalConfig';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';
import * as serviceWorker from './serviceWorker';
//runWithAdal(authContext, () => {
    // TODO : continue your process
    ReactDOM.render(  <ActionCableProvider url={API_WS_ROOT}>
    <App/>
    <Custom/>
  </ActionCableProvider>, document.getElementById('root'));

//});

serviceWorker.unregister();