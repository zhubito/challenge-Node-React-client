import axios from 'axios';

// Globals
const URL = 'http://localhost:8080/api/posts';

// constantes
const dataInicial = {
    array: [],
    filter: ""
}
// types
const GET_POST_OK = 'GET_POST_OK';
const INSERT_POST_OK = 'INSERT_POST_OK';
const DELETE_POST_OK = 'DELETE_POST_OK';
const CHANGE_FILTER = 'CHANGE_FILTER';

// reducer
export default function postReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_POST_OK:
            return {...state, array: action.payload} 
        case INSERT_POST_OK:
            return {...state, array: [...state.array, action.payload]};
        case DELETE_POST_OK:
            let arrayFilter = state.array.filter(post => post.id !== action.payload.id);            ;
            return {...state, array: arrayFilter};
        case CHANGE_FILTER:
            return {...state, filter: action.payload} 
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
        console.log(error)
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
        console.log(error)
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
        console.log(error)
    }
}

export const changeFilterAction = (filter) => async (dispatch) => {

    try {
        dispatch({
            type: CHANGE_FILTER,
            payload: filter
        })
    } catch (error) {
        console.log(error)
    }
}