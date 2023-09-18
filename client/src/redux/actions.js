import axios from 'axios';
import { GET_ALL_DOGS, 
    GET_TEMPERAMENTS, 
    SEARCH_BY_NAME, 
    SEARCH_DOG_BY_ID, 
    ORDER_BY_NAME, 
    ORDER_BY_WEIGHT, 
    ORDER_BY_ORIGIN, 
    ORDER_BY_TEMPERAMENT, 
    POST_DOG, } from './actions-types';

const urlApi = 'http://localhost:3001';

export function getAllDogs () {
    return async function (dispatch) {
        let response = await axios.get(`${urlApi}/alldogs`);
        return dispatch({
            type: GET_ALL_DOGS,
            payload: response.data
        })
    }
};

export function getTemperaments () {
    return async function (dispatch) {
        let response = await axios.get(`${urlApi}/temperaments`);
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: response.data
        })
    }
};

export function getDogName (payload) {
    return async function (dispatch) {
        let response = await axios.get(`${urlApi}/dogs?name=${payload}`);
        return dispatch({
            type: SEARCH_BY_NAME,
            payload: response.data
        })
    }
};

export function getDogById (payload) {
    return async function (dispatch){
        let response = await axios.get(`${urlApi}/dogs/${payload}`);
        return dispatch({
            type: SEARCH_DOG_BY_ID,
            payload: response.data
        })
    }
};

export function postDog (payload) {
    return async function (dispatch) {
        let response = await axios.post(`${urlApi}/dog`, payload);
        return dispatch({
            type: POST_DOG,
            payload: response,
        })
    }
};

export function orderByTemperament (payload) {
    return {
        type: ORDER_BY_TEMPERAMENT,
        payload
    }
};

export function orderByOrigin (payload) {
    return {
        type: ORDER_BY_ORIGIN,
        payload
    }
};

export function orderByName (payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
};

export function orderByWeight (payload) {
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
};