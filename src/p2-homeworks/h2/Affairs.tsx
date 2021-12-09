import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (_id: number) => void
    addCompletedAffairs: (affair:AffairType) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => {
        return <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            addCompletedAffairs={props.addCompletedAffairs}
        />
    })
    const setAllFilter = (filter:FilterType) => {props.setFilter(filter)} // need to fix
    return (
        <div className={s.wrapper__content}>
            <div className={s.wrapper__affairs}>
                {mappedAffairs}
            </div>
            <div className={s.buttons}>
                <button onClick={() => setAllFilter('all')}>All</button>
                <button onClick={() => setAllFilter('high')}>High</button>
                <button onClick={() => setAllFilter('middle')}>Middle</button>
                <button onClick={() => setAllFilter('low')}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
