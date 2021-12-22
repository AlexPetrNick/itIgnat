import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import s from './spanStyle.module.css'


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus,
        onBlur,
        onEnter,
        spanProps,

        ...restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
        setEditMode(false)
        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false)
        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)

        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = s.span__style

    return (
        <>
            {editMode
                ? (
                    <div className={s.wrapper__input}>
                        <b>&#128190;</b>
                        <SuperInputText
                            autoFocus
                            onBlur={onBlurCallback}
                            onEnter={onEnterCallback}
                            className={s.input__added__style}

                            {...restProps}
                        />
                    </div>
                ) : (
                    <div className={s.wrapper__span}>
                        <b>&#9999;</b>
                        <span
                            onDoubleClick={onDoubleClickCallBack}
                            className={spanClassName}

                            {...restSpanProps}
                        >
                            {/*если нет захардкодженного текста для спана, то значение инпута*/}
                            {children || restProps.value}
                        </span>
                    </div>
                )
            }
        </>
    )
}

export default SuperEditableSpan
