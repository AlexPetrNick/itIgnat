import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import React, {ChangeEvent,MouseEvent, FC, useState} from "react";
import s from '../hw8.module.css'

type AlternativePeopleType = {
    sortAge: (age:number) => void
    sortName: (name:string) => void
    seeAllCallback: () => void
}


export const AlternativePeople:FC<AlternativePeopleType> = ({sortAge, sortName, seeAllCallback}) => {
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<string>('')

    const onChangeAge = (e:ChangeEvent<HTMLInputElement>) => setAge(e.currentTarget.value)
    const onChangeName = (e:ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)
    const onClickFilterAge = (e:MouseEvent<HTMLButtonElement>) => {
        if (age) sortAge(Number(age))
        setAge('')
    }
    const onClickFilterName = (e:MouseEvent<HTMLButtonElement>) => {
        if (name) sortName(name)
        setName('')
    }
    const seeAll = (e:MouseEvent<HTMLButtonElement>) => seeAllCallback()

    return (
        <div className={s.wrapper__add__filter} >
            <input
                type="number"
                placeholder={'Введите возраст'}
                value={age}
                onChange={onChangeAge}
            />
            <SuperButton onClick={onClickFilterAge}>Найти по возрасту</SuperButton>
            <input
                type="text"
                placeholder={'Введите имя'}
                value={name}
                onChange={onChangeName}
            />
            <SuperButton onClick={onClickFilterName}>Найти по имени</SuperButton>
            <SuperButton onClick={seeAll}>Показать все</SuperButton>
        </div>
    )
}