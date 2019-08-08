// authentication relation actions
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
}

export const auth = (email, password) => {
    return dispatch => {
      dispatch(authStart());
    //   Firebase Request Body Payload: https://firebase.google.com/docs/reference/rest/auth
      const authData = {
          email: email,
          password: password,
          returnSecureToken: true
      }
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyAmbLILJFUAgYTUNIFaybIiLkWpyBl0TTI]', authData)
      .then(response => {
          console.log(response);
          dispatch(authSuccess(response.data));      
        })
      .catch(err => {
        console.log(err);
        dispatch(authFail());
      });
    };
};
