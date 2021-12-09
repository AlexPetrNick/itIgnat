import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2";

type AlternativeAffairsType = {
    affairs: Array<AffairType>
}

function AlternativeAffairs(props:AlternativeAffairsType) {

    const drawAffairs = props.affairs.map((data:AffairType) => {
        return (
            <li>
                {data.name}
            </li>
        )
    })

    return (
        <div className={s.wrapper__completed__affairs}>
            <h6>Completed affairs</h6>
            <div className={s.completed__affairs}>
                <ul>
                    {drawAffairs}
                </ul>
            </div>
        </div>
    )
}

export default AlternativeAffairs
