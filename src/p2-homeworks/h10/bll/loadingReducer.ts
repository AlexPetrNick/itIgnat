import { Reducer } from 'redux';

export type stateType = {
    isLoading: boolean
    test: string
}

type ActionType = LoadingType

type loadingReducerType = (state: stateType, action:ActionType) => stateType


export const toggleLoadingAction = 'TOGGLE_LOADING'

type LoadingType = { type: typeof toggleLoadingAction}
export const toggleLoaderAC = ():LoadingType => ({type: toggleLoadingAction})


let initState:stateType = {
    isLoading: false,
    test: 'test'
}

export const loadingReducer:Reducer<stateType, ActionType> = (state = initState, action) => {
    switch (action.type) {
        case toggleLoadingAction: {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        }
        default:
            return {...state}
    }
}
