import React from 'react'
import s from './Pages.module.css'

function Error404() {
    return (
        <div className={s.wrapper__404}>
            <div className={s.content__404}>
                <div className={s.text__404}>
                    <div>404 NotFound</div>
                    <div>Страница не найдена. Мы пытались ее найти но не смогли</div>
                </div>
                <div className={s.cross__404}>&times;</div>
            </div>
        </div>
    )
}

export default Error404
