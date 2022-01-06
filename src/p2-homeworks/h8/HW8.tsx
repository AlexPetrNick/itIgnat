import React, {useState} from 'react'
import {homeWorkReducer, stateType} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './hw8.module.css'
import {AlternativePeople} from "./bll/AlternativePeople";

export type UserType = Array<stateType>

const initialPeople: UserType= [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType>(initialPeople) // need to fix any

    const finalPeople = people.map((p: stateType) => (
        <div className={s.people__style} key={p._id}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sort18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
    const sortAge = (age:number) => {
        console.log(age)
        setPeople(homeWorkReducer(initialPeople,{type: 'filterAge', payload:age}))
    }
    const sortName = (name:string) => setPeople(homeWorkReducer(initialPeople,{type: 'filterName', payload:name}))
    const seeAllCallback = () => setPeople(homeWorkReducer(initialPeople, {type:'all', payload: ''}))


    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div className={s.wrapper__people}>
                {finalPeople}
            </div>

            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sort18}>check 18</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativePeople
                sortAge={sortAge}
                sortName={sortName}
                seeAllCallback={seeAllCallback}
            />
            <hr/>
        </div>
    )
}

export default HW8
