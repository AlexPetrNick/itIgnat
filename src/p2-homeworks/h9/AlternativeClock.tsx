import React, {useState, MouseEvent, useEffect} from 'react'
import s from './Clock.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


export const AlternativeClock = () => {
    const [timer, setTimer] = useState<number>(0)
    const [time, setTime] = useState<Date>(new Date(0,0,0))
    const [listTime, setListTime] = useState<Array<string>>([
        '00:00:00.001',
        '00:00:02.002',
        '00:03:00.003',
        '00:00:03.001',
    ])

    const startTimer = (e:MouseEvent<HTMLButtonElement>) => {
        const copyTime = new Date(time)
        const idTimer:number = window.setInterval(() => {
            copyTime.setMilliseconds(copyTime.getMilliseconds() + 10)
            setTime(new Date(copyTime))
        }, 10)
        setTimer(idTimer)
    }

    /*useEffect(() => {
        console.log('ss')
    }, [time])*/

    const stopTimer = () => window.clearInterval(timer)
    const resetTimer = () => setTime(new Date(0,0,0))
    const writeTime = () => setListTime([...listTime, `${time.toLocaleTimeString()}.${time.getMilliseconds()}`])
    const resetList = () => setListTime([])

    const listTimeSet = listTime.map(t => <i>{t}</i>)

    return (

        <div className={s.wrapper__alt}>
            <h2>Секундомер</h2>
            <div className={s.number__time__millisecond}>
                <b>{time.toLocaleTimeString() + '.' + time.getMilliseconds()}</b>
            </div>
            <div className={s.managment}>
                <SuperButton onClick={startTimer}>start</SuperButton>
                <SuperButton onClick={writeTime}>write</SuperButton>
                <SuperButton onClick={stopTimer}>stop</SuperButton>
                <SuperButton onClick={resetTimer}>reset</SuperButton>
            </div>
            <div className={s.list__timeset}>
                {listTimeSet}
            </div>
            <SuperButton onClick={resetList}>Reset List</SuperButton>
        </div>
    )
}

