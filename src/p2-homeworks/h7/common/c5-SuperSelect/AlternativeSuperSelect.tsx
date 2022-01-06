import React, {MouseEvent, DetailedHTMLProps, FC, SelectHTMLAttributes, useState} from 'react'
import s from './style.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>


type AlternativeSuperSelectType = {
    option: Array<string>
    values: Array<string>
    setValueMulti: (option:Array<string>) => void
}

type ArrayType = 'up' | 'down'

const temp = ['JS','CSS','REACT','TS', 'PYTHON', 'x', 'y', 'PYTHON1']


/*&and; &or; */
export const AlternativeSuperSelect:FC<AlternativeSuperSelectType> = ({values}) => {
    const [visibleMenu, setVisibleMenu] = useState<boolean>(true)
    const [stateArray, setStateArray] = useState<ArrayType>('up')
    const onClickLiElement = (elem:string) => {
        if (values.includes(elem)) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

    const liMenu = temp.map((d,i) => {
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
    const onClickSelect = (e:MouseEvent<HTMLDivElement>) => {
        setVisibleMenu(!visibleMenu)
        setStateArray(stateArray === 'up' ? 'down' : 'up')
    }

    return (
        <div>
            <div
                className={s.menu__alt__select}
                onClick={onClickSelect}
            >
                <div>Select</div>
                <div className={s.arrow__select}>{stateArray === 'up' ? <b>&and;</b> : <b>&or;</b>} </div>
            </div>
            {visibleMenu &&
            <div className={s.menu__select}>
                <div className={s.wrapper__option}>
                    {liMenu}
                </div>
            </div>
            }
        </div>
    )
}

