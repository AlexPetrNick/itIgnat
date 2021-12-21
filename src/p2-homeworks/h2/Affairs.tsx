import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (_id: number) => void
    addCompletedAffairs: (affair:AffairType) => void
    filter:FilterType
}

const buttonValue = ['all' , 'middle' , 'high' , 'low'] as Array<FilterType>

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => {
        return <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            addCompletedAffairs={props.addCompletedAffairs}
        />
    })
    const mappedButton = buttonValue.map(filt => {
        let pressedButton = props.filter === filt ? s.pressed : undefined
        return <button className={pressedButton} onClick={() => setAllFilter(filt)}>{filt}</button>
    })
    const setAllFilter = (filter:FilterType) => {props.setFilter(filter)} // need to fix



    return (
        <div className={s.wrapper__content}>
            <div className={s.wrapper__affairs}>
                {mappedAffairs}
            </div>
            <div className={s.buttons}>
                {mappedButton}
                {/*<button onClick={() => setAllFilter('all')}>All</button>
                <button onClick={() => setAllFilter('high')}>High</button>
                <button onClick={() => setAllFilter('middle')}>Middle</button>
                <button onClick={() => setAllFilter('low')}>Low</button>*/}
            </div>

        </div>
    )
}

export default Affairs
