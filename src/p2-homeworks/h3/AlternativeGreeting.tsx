import React from "react";
import s from './Greeting.module.css'

type AlternativeGreetingType = {
    log: Array<string>
}

function AlternativeGreeting(props:AlternativeGreetingType) {
    const drawLog = props.log.map((data:string) => {
        if (data.length === 29) {
            return <><i className={s.error_log}>{data}<br/></i></>
        } else {
            return <><i className={s.success_log}>{data}<br/></i></>
        }
    })
    return (
        <div className={s.wrapper__log}>
            {drawLog}
        </div>
    );
}

export default AlternativeGreeting;
