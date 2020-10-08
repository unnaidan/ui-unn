import {
    createStore,
    combineReducers
} from 'redux'
import {
    persistStore,
    persistReducer
} from 'redux-persist'
import storage from '@react-native-community/async-storage'
import auth from './auth'

const config = {
    storage,
    key: 'redux',
    whitelist: [
        'auth'
    ]
}

const persistedReducer = persistReducer(config, combineReducers({
    auth
}))

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export default store
export {
    store,
    persistor
}
