import React from 'react'
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
    addCompletedAffairs: (affair:AffairType) => void
}

function Affair(props: AffairPropsType) {
    const setLigth = (filter:string):string => {
        if (filter === 'middle') {
            return s.elements__affair__yellow
        } else if (filter === 'high') {
            return s.elements__affair_red
        } else {
            return s.elements__affair_green
        }
    }
    const deleteCallback = props.deleteAffairCallback
    const addCallback = (affairs:AffairType):void => {
        props.addCompletedAffairs(affairs)
        props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div className={setLigth(props.affair.priority)}>
            ({props.affair.priority}){props.affair.name}
            <div className="buttons__affairs">
                <button
                    className={s.delete__button}
                    onClick={() => deleteCallback(props.affair._id)}
                >X</button>
                <button
                    className={s.add__button}
                    onClick={() => addCallback(props.affair)}
                >+</button>
            </div>
        </div>
    )
}

export default Affair
