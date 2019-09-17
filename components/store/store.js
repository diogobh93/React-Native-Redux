import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

// Irá retornar o itens para seu component.
const rootReducer = combineReducers({
    itens: userReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;