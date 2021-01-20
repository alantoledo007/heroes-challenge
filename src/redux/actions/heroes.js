import axios from 'axios';
const BASE_URL = 'https://swapi.dev/api'

//actions
export const GET_HEROES = "GET_HEROES";
export const SEARCH_HERO = "SEARCH_HERO";
export const DELETE_HERO = "DELETE_HERO";

export const getHeroes = () => {
    return dispatch => {
        return axios.get(`${BASE_URL}/people`)
            .then(res => res.data)
            .then(res => {
                const payload = res.results.slice(0, res.count > 10 ? 10 : res.count);
                return dispatch({type:GET_HEROES, payload});
            });
    }
}