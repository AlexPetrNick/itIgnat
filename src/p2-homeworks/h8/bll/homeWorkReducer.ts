export type stateType = {
    _id: number
    name: string
    age: number
}
export type ActionType = {
    type: 'sort' | 'check' | 'filterAge' | 'filterName' | 'all'
    payload: string | number
}

export type homeWorkReducerType = (state: stateType[], action: ActionType) => stateType[]


export const homeWorkReducer:homeWorkReducerType = (state, action) => {
    let copyState = [...state]
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up': {
                    copyState.sort((a, b) => b.age - a.age)
                    return  copyState
                }
                case 'down': {
                    copyState.sort((a, b) => a.age - b.age)
                    return  copyState
                }
                default:
                    return copyState
            }
        }
        case 'check': {
            return copyState.filter(u => u.age > action.payload)
        }
        case 'filterAge': {
            return copyState.filter(u => u.age === action.payload)
        }
        case 'filterName': {
            return copyState.filter(u => u.name === action.payload)
        }
        case 'all': {
            return state
        }
        default:
            return copyState
    }
}