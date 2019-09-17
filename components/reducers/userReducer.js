import { ADD_USER } from '../actions/types';

// State Global
const initialState = {
    user: {
        name: null,
        idade: null,
    },
};

// userReducer utilizado em store para retornar o state.
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                
                // Adiciona no initialStatel as informações enviadas.
                user: action.payload.user,

            };
        default:
            return state;
    }
}

export default userReducer;