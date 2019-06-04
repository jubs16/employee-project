import React from 'react';
import ReactDOM from 'react-dom';
import './custom.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import fire from './config/fire';

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fire),
        reactReduxFirebase(fire)
    )
);

ReactDOM.render(
    <Provider store={store}>
             <App />
    </Provider>, 
        document.getElementById('root'));