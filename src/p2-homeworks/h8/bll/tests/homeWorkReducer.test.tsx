import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    console.log(newState)
    expect(newState).toStrictEqual([
        {_id: 1, name: 'Александр', age: 66},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 0, name: 'Кот', age: 3},
    ])
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    console.log(newState)
    expect(newState).toStrictEqual([
        {_id: 0, name: 'Кот', age: 3},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 1, name: 'Александр', age: 66},
    ])
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    console.log(newState)
    expect(newState).toStrictEqual([
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ])
})
test('check filter age', () => {
    const newState66 = homeWorkReducer(initialState, {type: 'filterAge', payload: 66})
    const newState40 = homeWorkReducer(initialState, {type: 'filterAge', payload: 40})
    const newState0 = homeWorkReducer(initialState, {type: 'filterAge', payload: 0})
    console.log(newState66)
    console.log(newState40)
    console.log(newState0)

    expect(newState66).toStrictEqual([{_id: 1, name: 'Александр', age: 66}])
    expect(newState40).toStrictEqual([{_id: 4, name: 'Дмитрий', age: 40}])
    expect(newState0).toStrictEqual([])
})
test('check filter name', () => {
    const newStateA = homeWorkReducer(initialState, {type: 'filterName', payload: 'Александр'})
    const newStateV = homeWorkReducer(initialState, {type: 'filterName', payload: 'Виктор'})
    const newStateJ = homeWorkReducer(initialState, {type: 'filterName', payload: 'Джеймс'})
    console.log(newStateA)
    console.log(newStateV)
    console.log(newStateJ)

    expect(newStateA).toStrictEqual([{_id: 1, name: 'Александр', age: 66}])
    expect(newStateV).toStrictEqual([{_id: 3, name: 'Виктор', age: 44}])
    expect(newStateJ).toStrictEqual([])
})
