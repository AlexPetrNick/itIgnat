import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v4 as generateUuid} from 'uuid'
import AlternativeGreeting from "./AlternativeGreeting";


export type UserType = {
    _id: string
    name: string
}


function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any
    const [log, setLog] = useState<Array<string>>([])

    const addUserCallback = (name: string):void => {
        setUsers([...users, {
            _id: generateUuid(),
            name: name
        }])
    }

    const addLog = (newLog:string):void => {
        setLog([...log, newLog])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
                setLog={addLog}
            />

            <hr/>
            <AlternativeGreeting
                log={log}
            />
            <hr/>
        </div>
    )
}

export default HW3
