import React from 'react'; //new ES6 way of doing it
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// we can import css files now! as part of prod build they'll be placed in a separate css file.
// service worker enables better experience for offline applications, won't focus too much on this

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// this will render and attach our stuff to the 'root' element in the index file
