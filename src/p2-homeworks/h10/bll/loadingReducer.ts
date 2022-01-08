import { Reducer } from 'redux';
import one from '../image/6.gif'

export type stateType = {
    isLoading: boolean
    loaderSrc: string
    isLoadingAlt:boolean
}

type ActionType = LoadingType | LoadingTypeAlt | setImageSrcACType


export const toggleLoadingAction = 'TOGGLE_LOADING'
export const toggleLoadingActionAlt = 'TOGGLE_LOADING_ALT'
export const setImageSrc = 'SET_IMAGE_SRC'


type LoadingType = { type: typeof toggleLoadingAction}
export const toggleLoaderAC = ():LoadingType => ({type: toggleLoadingAction})
type LoadingTypeAlt = { type: typeof toggleLoadingActionAlt}
export const toggleLoaderAltAC = ():LoadingTypeAlt => ({type: toggleLoadingActionAlt})
type setImageSrcACType = { type: typeof setImageSrc, image: string}
export const setImageSrcAC = (image:string):setImageSrcACType => ({ type:setImageSrc, image })

let initState:stateType = {
    isLoading: false,
    isLoadingAlt: false,
    loaderSrc: one
}

export const loadingReducer:Reducer<stateType, ActionType> = (state = initState, action) => {
    switch (action.type) {
        case toggleLoadingAction: {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        }
        case toggleLoadingActionAlt: {
            return {
                ...state,
                isLoadingAlt: !state.isLoadingAlt
            }
        }
        case setImageSrc: {
            return {
                ...state,
                loaderSrc: action.image
            }
        }
        default:
            return {...state}
    }
}
