import React, {FC} from 'react'
import s from './Message.module.css'
import {MessageType} from "./Message";

export const AlternativeMessage: FC<MessageType> = (props) => {


    return (
        <div className={s.alt__message__wrapper}>
            <div className={s.alt__content__wrapper}>
                <div className={s.message}>
                    <div className={s.name__user}>{props.name}</div>
                    <div className={s.alt__text__message}>{props.message}</div>
                </div>
                <div className={s.data__message}>{props.time}</div>
            </div>
            <img src={props.avatar} className={s.avatar}/>
        </div>
    )
}

