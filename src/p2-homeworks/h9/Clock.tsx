import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'




function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>('')
    const [show, setShow] = useState<boolean>(false)
    const [statusTimer, setStatusTimer] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        setStatusTimer(false)
    }
    const start = () => {
        const id: number = window.setInterval(() => {
            setDate(new Date().toLocaleString())
        }, 1000)
        setTimerId(id)
        setStatusTimer(true)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const arrDate = date.split(',')
    const stringTime = arrDate.length > 1 ? arrDate[1] : '00:00:00'
    const stringDate =arrDate.length > 1 ? arrDate[0] : '00.00.0000'

    const test = new Date()


    return (
        <div>
            <div className={s.wrapper__time__data}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={s.clock__time}
                >
                    <b>{stringTime}</b>
                </div>

                {show && (
                    <div className={s.clock__data}>

                        <b>&nbsp;&nbsp;Date: {stringDate}</b>
                    </div>
                )}
            </div>

            <div className={s.wrapper__manage}>

                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
                {statusTimer ?
                    <div className={s.started}>Запущен</div> :
                    <div className={s.stoped}>Остановлен</div>
                }
            </div>

        </div>
    )
}

export default Clock
