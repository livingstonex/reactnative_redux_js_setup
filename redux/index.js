import axios from "axios";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Actions
export const onUserLogin = ({email, password}) => {
    return async (dispatch) => {
        try {
            console.log("Running action");
            const response = await axios.post("https://netflix-example.herokuapp.com/user/mock-login", {email, password});
            console.log("Response: " +response);

            dispatch({type: 'ON_LOGIN', payload: response.data});
        } catch (error) {
            dispatch({type: 'ON_ERROR', payload: error});
        }
    }
}

export const onFetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = {
                data: [
                    {"Magoes": "$12"},
                    {"Cocconut": "$19"},
                    {"Apple": "$99"},
                ]
            };
    
            dispatch({type: 'ON_FETCH', payload: response.data});
        } catch (error) {
            dispatch({type: 'ON_ERROR', payload: error});
        }
    }
}

// Reducers
export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ON_LOGIN':
            return {...state, user: action.payload};
            break;

        case 'ON_FETCH':
            return {...state, products: action.payload};
            break;

        case 'ON_ERROR':
            return {...state, error: action.payload}
            break;
    
        default:
            return state;
            break;
    }
}

// Root Reducers (Combine Reduces)
export const rootReducer = combineReducers({
    userReducer: userReducer
});


// Store
export const store = createStore(rootReducer, applyMiddleware(thunk));