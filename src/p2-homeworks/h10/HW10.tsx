import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {connect, useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from "./bll/store";
import {toggleLoaderAC} from "./bll/loadingReducer";
import preloader from './image/Fidget-spinner.gif'
import preloader2 from './image/6.gif'
import s from './style.module.css'
import Alternative from "./bll/Alternative";


const HW10 = () => {
    const state = useSelector((state:AppStoreType):boolean => state.loading.isLoading)
    const dispatch = useDispatch()

    console.log(preloader2)

    const setLoading = () => {
        setTimeout(() => {
            dispatch(toggleLoaderAC())
        }, 3000)
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

type mapStateToPropsReturnType = {
    loading: boolean
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsReturnType => {
    return {
        loading: state.loading.isLoading
    }
}

export default connect(mapStateToProps, {
    toggleLoaderAC
})(HW10)

