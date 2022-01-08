import {loadingReducer} from './loadingReducer'
import { combineReducers, createStore } from 'redux'

const reducers = combineReducers({
    loading: loadingReducer,
})

export const store = createStore(reducers)

export type storeType = typeof store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
console.log(typeof store.getState().loading)