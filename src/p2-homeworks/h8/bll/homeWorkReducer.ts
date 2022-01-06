export type stateType = {
    _id: number
    name: number
    age: number
}
export type ActionType = {
    type: 'sort' | 'check'
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
        default:
            return copyState
    }
}