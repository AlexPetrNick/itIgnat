import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: (name:string) => void
    error: boolean
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass:string = error ? s.error : s.not_error

    return (
        <div className={s.wrapper}>
            <div className={s.fields__input}>
                <input
                    value={name}
                    onChange={(e) => setNameCallback(e)}
                    className={inputClass}
                />
                <button onClick={() => addUser(name)}>add</button>
                <span className={s.total__user}>Total User: {totalUsers}</span>
            </div>
            {error ? <span className={s.message__error}>Имя должно быть больше 0 символов</span> : null}
        </div>
    )
}

export default Greeting
