import React, {FC, useEffect, useState} from 'react'
import s from './Message.module.css'
import {AlternativeMessage} from "./AlternativeMessage";


interface MessageWrapperType {
    arrayData: Array<MessageType>,
    currentUser: string
}

export const MessageWrapper: FC<MessageWrapperType> = (props) => {
    useEffect(() => {
        let div = document.getElementById("window")
        if (div) {
            div.scrollTo(0, div.scrollHeight)
        }
    })
    const drawMessage = (arrayMessage: Array<MessageType>) => {
        return arrayMessage.map(data => {
            if (data.name === 'Alexander') {
                return (
                    <Message
                        avatar={data.avatar}
                        name={data.name}
                        message={data.message}
                        time={data.time}
                    />
                )
            } else {
                return (
                    <AlternativeMessage
                        avatar={data.avatar}
                        name={data.name}
                        message={data.message}
                        time={data.time}
                    />
                )
            }

        })
    }

    return (
        <div className={s.allmessage}>
            {drawMessage(props.arrayData)}
        </div>
    )
}


export interface MessageType {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: FC<MessageType> = (props) => {


    return (
        <div className={s.message__wrapper}>
            <img src={props.avatar} className={s.avatar}/>
            <div className={s.content__wrapper}>
                <div className={s.message}>
                    <div className={s.name__user}>{props.name}</div>
                    <div className={s.text__message}>{props.message}</div>
                </div>
                <div className={s.data__message}>{props.time}</div>
            </div>
        </div>
    )
}

