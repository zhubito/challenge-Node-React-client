import axios from 'axios';

// constantes
const dataInicial = {
    array: [],
    initial: true
}
// types
const GET_POST_OK = 'GET_POST_OK';
const INSERT_POST_OK = 'INSERT_POST_OK';
const DELETE_POST_OK = 'DELETE_POST_OK';

// reducer
export default function postReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_POST_OK:
            return {...state, initial: false, array: action.payload} 
        case INSERT_POST_OK:
            return {...state, array: [...state.array, action.payload]};
        case DELETE_POST_OK:
            let arrayFilter = state.array.filter(post => post.id !== action.payload.id);            ;
            return {...state, array: arrayFilter};
        default:
            return state
    }
}

// acciones
export const getPostAction = () => async (dispatch) => {

    try {
        const res = await axios.get(`http://localhost:8080/api/posts`);
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
        const res = await axios.post(`http://localhost:8080/api/posts`, post);
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
        const res = await axios.delete(`http://localhost:8080/api/posts/${id}`);
        dispatch({
            type: DELETE_POST_OK,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}