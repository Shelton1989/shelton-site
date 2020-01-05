import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
    hydrate,
    render
} from 'react-dom';

const rootElem = document.getElementById('root')

// ReactDOM.render(<App />, document.getElementById('root'));

if (rootElem.hasChildNodes()) {
    hydrate(<App />, rootElem)
} else {
    render(<App />, rootElem)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
