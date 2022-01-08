import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import s from '../style.module.css'
import {connect, useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from "./store";
import {setImageSrcAC, toggleLoaderAltAC} from "./loadingReducer";
import one from '../image/6.gif'
import two from '../image/Fidget-spinner.gif'
import three from '../image/Rocket.gif'

type mapStateToPropsReturnType = {
    image: string
    status: boolean
}

export const Alternative = () => {
    const state = useSelector((state:AppStoreType):mapStateToPropsReturnType => {
        return {
            image: state.loading.loaderSrc,
            status: state.loading.isLoadingAlt
        }
    })
    const dispatch = useDispatch()

    const onClickOnButton = () => dispatch(toggleLoaderAltAC())
    const onClickChangeLoader = (loader: string) => dispatch(setImageSrcAC(loader))

    return (
        <div>
            <div>
                {state.status ? <img className={s.img__alt} src={state.image} alt=""/> :
                    <div className={s.ld}>Включите лоадер</div>}
            </div>
            <div className={s.wrapper__button}>
                <div>
                    <SuperButton onClick={() => onClickChangeLoader(one)}>Первый</SuperButton>
                    <SuperButton onClick={() => onClickChangeLoader(two)}>Второй</SuperButton>
                    <SuperButton onClick={() => onClickChangeLoader(three)}>Третий</SuperButton>
                </div>
                <SuperButton
                    className={s.on__off}
                    onClick={onClickOnButton}
                >Вкл/Выкл</SuperButton>
            </div>
        </div>

    )
}
