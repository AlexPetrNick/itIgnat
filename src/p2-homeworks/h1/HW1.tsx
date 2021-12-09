import React, {FC, ReactEventHandler, useState} from 'react'
import {MessageType, MessageWrapper} from "./Message";
import s from './Message.module.css'
import {AlternativeMessage} from "./AlternativeMessage";

type UsersType = {
    name: string,
    avatar: string
}

const users = [
    {
        name: 'Alexander',
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    },
    {
        name: 'Guest',
        avatar: 'https://a.d-cd.net/_gAAAgG9DOA-960.jpg',
    }
] as Array<UsersType>

const messageData = [
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Alexander',
        message: 'some text',
        time: '22:00',
    },
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Alexander',
        message: 'some text',
        time: '22:00',
    }
] as Array<MessageType>


export const HW1 = () => {
    const [currentUser, setCurrentUser] = useState(users[0])
    const [stateMessage, setStateMessage] = useState(messageData)
    const sendMessage = (message: MessageType): void => {
        setStateMessage([...stateMessage, message])
    }
    const changeUser = ():void => {
        if (currentUser.name === 'Alexander') {
            setCurrentUser(users[1])
        } else {
            setCurrentUser(users[0])
        }
    }
    return (
        <div>
            <hr/>
            homeworks 1
            <div className={s.wrapper} >
                <div className={s.dialog__window} id="window" >
                    <MessageWrapper
                        arrayData={stateMessage}
                        currentUser={currentUser.name}
                    />
                </div>
            </div>
            <FormInput
                currentUser={currentUser}
                sendMessage={sendMessage}
                setCurrentUser={changeUser}
            />
            <h4>Нажмите на Аватар чтобы сменить пользователя (AlternativeMessage)</h4>
            <hr/>
            <hr/>
        </div>
    )
}


interface FormPropsType {
    currentUser: UsersType,
    sendMessage: (message: MessageType) => void
    setCurrentUser: () => void
}

const FormInput: FC<FormPropsType> = (props) => {
    const [textMessage, setTextMessage] = useState('')
    const onClickForm = (e: React.FormEvent, user?: string, text?: string, date?: string): void => {
        if (textMessage.length) {
            const sentObject: MessageType = {
                message: textMessage,
                name: props.currentUser.name,
                avatar: props.currentUser.avatar,
                time: String(new Date().toLocaleTimeString())
            }
            props.sendMessage(sentObject)
            setTextMessage('')
        }
        e.preventDefault()
    }
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTextMessage(e.target.value)
    }


    return (
        <form onSubmit={(e) => onClickForm(e)} className={s.wrapper__form}>
            <div onClick={() => props.setCurrentUser()} className={s.choose__user}>
                <img src={props.currentUser.avatar}/>
            </div>
            <input
                value={textMessage}
                className={s.input__text}
                type="text"
                onChange={(e) => onChangeInput(e)}
            />
            <input type="submit"/>
        </form>
    )
}

//
//<div ={(e) => onClickForm(e)} className={s.submit}></div>