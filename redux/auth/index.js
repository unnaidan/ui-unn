import { createReducer } from 'redux-create-reducer'
import {
    SET_USER,
    SET_ACCESS_TOKEN
} from './actionTypes'

const state = {
    user: null,
    accessToken: null
}

const mutations = {
    [SET_USER](state, { payload }) {
        return {
            ...state,
            user: payload.user
        }
    },
    [SET_ACCESS_TOKEN](state, { payload }) {
        return {
            ...state,
            accessToken: payload.accessToken
        }
    }
}

export default createReducer(
    state,
    mutations
)
