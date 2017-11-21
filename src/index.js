import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './app/App';
import registerServiceWorker from './app/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
