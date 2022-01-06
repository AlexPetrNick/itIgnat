import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, ReactElement, JSXElementConstructor} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption, value,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] | undefined = options?.map(o => {
        return (
            <option value={o}>{o}</option>
        )

    });

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} value={value} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
