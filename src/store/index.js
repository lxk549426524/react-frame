import {createStore,combineReducers} from 'redux';
import Reducer from './reducer/index';

const reducers = combineReducers({
    Reducer
})

const Store=createStore(reducers)

export default Store