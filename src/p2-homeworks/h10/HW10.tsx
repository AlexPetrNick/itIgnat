import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {connect, useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from "./bll/store";
import {toggleLoaderAC} from "./bll/loadingReducer";
import preloader from './image/Fidget-spinner.gif'
import preloader2 from './image/6.gif'
import s from './style.module.css'
import {Alternative} from "./bll/Alternative";


export const HW10 = () => {
    const state = useSelector((state:AppStoreType):boolean => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        setTimeout(() => {
            dispatch(toggleLoaderAC())
        }, 2000)
        dispatch(toggleLoaderAC())
    };

    return (
        <div className={s.wrapper}>
            <hr/>
            homeworks 10

            {state
                ? (<img className={s.icon} src={preloader2} alt=""/>) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            <Alternative/>
            <hr/>
        </div>
    )
}


