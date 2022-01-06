import React, {MouseEvent, FocusEvent, DetailedHTMLProps, FC, SelectHTMLAttributes, useState} from 'react'
import s from './style.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>


type AlternativeSuperSelectType = {
    option: Array<string>
    values: Array<string>
    removeValue: (val: string) => void
    addValue: (val: string) => void
    className?: string
}

type ArrayType = 'up' | 'down'

const temp = ['JS','CSS','REACT','TS', 'PYTHON', 'x', 'y', 'PYTHON1']


export const AlternativeSuperSelect:FC<AlternativeSuperSelectType> = ({values, option,
              removeValue, addValue, className}) => {
    const [visibleMenu, setVisibleMenu] = useState<boolean>(true)
    const [stateArray, setStateArray] = useState<ArrayType>('down')
    const onClickLiElement = (elem:string) => values.includes(elem) ? removeValue(elem) : addValue(elem)

    const liMenu = option.map((d,i) => {
        const style = i % 2 !== 0 ? `${s.item__option__gray}` : ''
        const styleSelect = values.includes(d) ? `${s.selected__item__option}` : ''
        const allStyle = `${s.item__options} ${style} ${styleSelect}`
        return (
            <div
                key={d}
                className={allStyle}
                onClick={() => onClickLiElement(d)}
            >
                {d}
            </div>
        )
    })
    const onClickSelect = (e:MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>) => {
        setVisibleMenu(!visibleMenu)
        setStateArray(stateArray === 'up' ? 'down' : 'up')
    }

    const setTextSelected = (arrayString:string[], long: boolean) => {
        const joinedText = arrayString.join(', ')
        if (!long) {
            if (joinedText.length > 16) return joinedText.substr(0, 18) + '...'
        }
        return joinedText
    }

    return (
        <div className={`${s.wrapper__selector} ${className&&className}`}>
            <div
                className={s.menu__alt__select}
                onClick={onClickSelect}
                title={setTextSelected(values, true)}
            >
                <div>{setTextSelected(values, false)}</div>
                <div className={s.arrow__select}>{stateArray === 'up' ? <b>&and;</b> : <b>&or;</b>} </div>
            </div>
            {visibleMenu &&
            <div className={s.menu__select}  onMouseLeave={onClickSelect}>
                <div className={s.wrapper__option}>
                    {liMenu}
                </div>
            </div>
            }
        </div>
    )
}

