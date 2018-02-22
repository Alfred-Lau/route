import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SidebarExample from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SidebarExample />, document.getElementById('root'));
registerServiceWorker();
