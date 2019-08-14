import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';

//creates a store with reducer as argument
const store = createStore(postReducer);

//Provider component provides access to the store for other components
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </ Provider >, document.getElementById('root')
);
