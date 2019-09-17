import { ADD_USER } from './types';

export const addUser = user => {
    return {
        type: ADD_USER,
        payload: user
    }
}