/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router'

type Props = {};
export default class App extends Component<Props> {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBf40h9Zr5MXb7SIAL1olJzrXwL6SUfmbI',
            authDomain: 'manager-93bf5.firebaseapp.com',
            databaseURL: 'https://manager-93bf5.firebaseio.com',
            projectId: 'manager-93bf5',
            storageBucket: 'manager-93bf5.appspot.com',
            messagingSenderId: '989337615189'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); // Second argument is initial state
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}
