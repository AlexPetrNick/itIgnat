import React, {Dispatch, EventHandler, FC, ReactEventHandler, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name:string) => void
    setLog: (newLog:string) => void
}

const GreetingContainer: FC<GreetingContainerPropsType> = ({users, addUserCallback, setLog}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const currDate = () => (new Date().toLocaleTimeString())


    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setError(false)
        setName(e.target.value)
    }


    const addUser = (name:string):void => {
        if (name.length) {
            addUserCallback(name)
            alert(`Привет ${name}`)
            setLog(`(${currDate()}) Пользователь ${name} уcпешно добавлен`)
            setName('')
        } else {
            setLog(`(${currDate()}) Введено пустое имя`)
            setError(true)
        }
    }
    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
