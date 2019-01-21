import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_USER
} from "./types";

export const emailChanged = (text) => {
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({type: LOGIN_SUCCESS, payload: user});
    Actions.employeeList();
};

const loginUserFail = dispatch => {
    dispatch({
        type: LOGIN_FAIL
    });
};

const beginLoginUser = dispatch => {
    dispatch({
        type: LOGIN_USER
    })
};

export const loginUser = ({email, password}) => {
    return async (dispatch) => {
        beginLoginUser(dispatch);
        try {
            let user = await firebase.auth().signInWithEmailAndPassword(email, password);
            loginUserSuccess(dispatch, user);
        } catch (error) {
            console.log("Error sign in");
            console.log(error);

            console.log("Attempting to create account");
            try {
                let user = await firebase.auth().createUserWithEmailAndPassword(email, password)
                loginUserSuccess(dispatch, user);
            } catch(error) {
                console.log("Error creating user");
                console.log(error);

                loginUserFail(dispatch);
            }

        }
    }

};
