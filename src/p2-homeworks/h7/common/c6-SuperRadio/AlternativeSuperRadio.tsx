import React, {FC} from 'react'
import s from './style.module.css'

type AlternativeSuperRadioType = {
    option: Array<string>
    values: Array<string>
    removeValue: (val: string) => void
    addValue: (val: string) => void
}
const temp = ['JS','CSS','REACT','TS', 'PYTHON', 'x', 'y', 'PYTHON1']


export const AlternativeSuperRadio:FC<AlternativeSuperRadioType> = () => {
    const mappedOption = temp.map(o => {
        return (
            <div className={s.wrapper__radio}>
                <div>&bull;	</div>
                <div>{o}</div>
            </div>
        )
    })
    
    return (
        <div>
            {mappedOption}
        </div>
    )
}
