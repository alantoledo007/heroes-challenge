import { GET_HEROES, DELETE_HERO } from "../actions/heroes";

const initialState = {
    heroes: []
}

export default function heroesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_HEROES:
            return {
                ...state,
                heroes:action.payload
            }
        case DELETE_HERO:
            return {
                ...state,
                heroes:state.heroes.filter(item => item.name !== action.payload)
            }
        default:
            return state;
    }
}