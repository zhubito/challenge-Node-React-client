import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import postReducer from './postDucks';

const rootReducer = combineReducers({
    post: postReducer
});

const generateStore = () => createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) );
export default generateStore;
