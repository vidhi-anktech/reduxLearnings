import axios from "axios"
import { GET_USERS_BOOKS, LOGIN, LOGOUT, NAME } from "./types"
import { Dispatch } from "redux"

export const loginAction = () => {
    return {
        type: LOGIN,
        payload: true
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT,
        payload: false
    }
}

export const changeNameAction = (userName: string) => {
    return {
        type: NAME,
        payload: userName
    }
}

export const getUserBooks = () => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios.get('https://freetestapi.com/api/v1/books');
            dispatch({
                type: GET_USERS_BOOKS,
                payload: data
            })
        } catch (e) {
            console.log(`Error: ${e}`);
        }
    }
}