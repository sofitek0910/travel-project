import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, 
    AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_OUT } from './types';
import { toast } from 'react-toastify';
import setAuthToken from '../utils/setAuthToken';

// LOAD USER
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}  

// Register User
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors && errors.length) {
            errors.forEach(error => {
                toast.warning(error.msg, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
        };

        dispatch({
            type: REGISTER_FAIL
        });
    }
};

// Login User
export const login = ({email, password}) => async dispatch => {

    console.log("helllo");
    
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors && errors.length) {
            errors.forEach(error => {
                toast.warning(error.msg, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
        };

        dispatch({
            type: LOGIN_FAIL 
        });
    }
};

//Logout / clear profile

export const logout = () => dispatch => {
    dispatch({ type: LOGIN_OUT });
};