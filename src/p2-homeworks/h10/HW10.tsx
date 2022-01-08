import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {connect, useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from "./bll/store";
import {toggleLoaderAC} from "./bll/loadingReducer";


const HW10 = () => {
    const state = useSelector((state:AppStoreType):boolean => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        setTimeout(() => {
            dispatch(toggleLoaderAC())
        }, 3000)
        dispatch(toggleLoaderAC())
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {state
                ? (<div>крутилка...</div>) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
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

