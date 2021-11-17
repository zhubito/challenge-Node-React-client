import axios from 'axios';

// Globals
const URL = 'http://localhost:8080/api/posts';

// constantes
const dataInicial = {
    array: [],
    filter: "",
    newPost:{
        name: "",
        description: ""
    },
    error: ""
}

// types
const GET_POST_OK = 'GET_POST_OK';
const INSERT_POST_OK = 'INSERT_POST_OK';
const DELETE_POST_OK = 'DELETE_POST_OK';

const GET_POST_ERROR = 'GET_POST_ERROR';
const INSERT_POST_ERROR = 'INSERT_POST_ERROR';
const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_NEW_POST = 'CHANGE_NEW_POST';

// reducer
export default function postReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_POST_OK:
            return {...state, error: "", array: action.payload} 
        case INSERT_POST_OK:
            return {...state, error: "", newPost:{ name: "",  description: ""}, array: [...state.array, action.payload]};
        case DELETE_POST_OK:
            let arrayFilter = state.array.filter(post => post.id !== action.payload.id);
            return {...state, error: "", array: arrayFilter};
        case GET_POST_ERROR:
        case INSERT_POST_ERROR:
        case DELETE_POST_ERROR:
            return {...state, error: action.payload } 
        case CHANGE_FILTER:
            return {...state, filter: action.payload}
        case CHANGE_NEW_POST:
            return {...state, newPost: action.payload} 
        default:
            return state
    }
}

// acciones
export const getPostAction = () => async (dispatch) => {
    try {
        const res = await axios.get(URL);
        dispatch({
            type: GET_POST_OK,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_POST_ERROR,
            payload: error.message
        })
    }
}

export const insertPostAction = (post) => async (dispatch) => {
    try {
        const res = await axios.post( URL, post);
        dispatch({
            type: INSERT_POST_OK,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: INSERT_POST_ERROR,
            payload: error.message
        })
    }
}

export const deletePostAction = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${URL}/${id}`);
        dispatch({
            type: DELETE_POST_OK,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: DELETE_POST_ERROR,
            payload: error.message
        })
    }
}

export const changeFilterAction = (filter) => (dispatch) => {
    dispatch({
        type: CHANGE_FILTER,
        payload: filter
    });
}

export const changeFormNameAction = (name) => (dispatch, getState) => {
    dispatch({
        type: CHANGE_NEW_POST,
        payload: {
            name: name,
            description: getState().post.newPost.description
        }
    });
}

export const changeFormDescriptionAction = (description) => (dispatch, getState) => {    
    dispatch({
        type: CHANGE_NEW_POST,
        payload: {
            name: getState().post.newPost.name,
            description: description
        }
    });
}