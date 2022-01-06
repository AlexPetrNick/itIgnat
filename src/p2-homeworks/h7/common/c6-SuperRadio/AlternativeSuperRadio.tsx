import React, {FC} from 'react'
import s from './style.module.css'

type AlternativeSuperRadioType = {
    option: Array<string>
    values: Array<string>
    removeValue: (val: string) => void
    addValue: (val: string) => void
}

export const AlternativeSuperRadio: FC<AlternativeSuperRadioType> = ({values, option,
    removeValue, addValue}) => {

    const onClickRadioElement = (elem:string) => values.includes(elem) ? removeValue(elem) : addValue(elem)
    const mappedOption = option.map(o => {
        const styleSelect = values.includes(o) ? `${s.icon__selected}` : ''
        const allStyleIcon = `${s.icon__radio} ${styleSelect}`
        return (
            <div className={s.wrapper__radio}
                 onClick={() => onClickRadioElement(o)}
            >
                <div className={allStyleIcon}>&bull;</div>
                <div className={s.text__radio}>{o}</div>
            </div>
        )
    })

    return (
        <div>
            {mappedOption}
        </div>
    )
}
