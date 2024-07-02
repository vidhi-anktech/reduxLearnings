import { GET_USERS_BOOKS, LOGIN, LOGOUT, NAME } from "./types"

const initialState = {
    isSignedIn: false,
    userName: 'Vidhi',
    userBooks: [],
}

type ActionType = {
    type: string,
    payload: any
}

export default (state = initialState, { type, payload }: ActionType) => {

    switch (type) {
        case LOGIN:
            return { ...state, isSignedIn: payload }

        case LOGOUT:
            return { ...state, isSignedIn: payload }

        case NAME:
            return { ...state, userName: payload }

        case GET_USERS_BOOKS:
            return { ...state, userBooks: payload }
    }
    return state
}