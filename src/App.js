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
import config from '../firebase-config';

type Props = {};
export default class App extends Component<Props> {
    componentWillMount() {
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
