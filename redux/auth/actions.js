import {
    SET_USER,
    SET_ACCESS_TOKEN
} from './actionTypes'

const setUser = user => ({
    type: SET_USER,
    payload: {
        user
    }
})

const setAccessToken = accessToken => ({
    type: SET_ACCESS_TOKEN,
    payload: {
        accessToken
    }
})

export {
    setUser,
    setAccessToken
}
