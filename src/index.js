import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PreventingTransitionsExample from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PreventingTransitionsExample />, document.getElementById('root'));
registerServiceWorker();
