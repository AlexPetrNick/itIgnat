import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {AlternativeSuperSelect} from "./common/c5-SuperSelect/AlternativeSuperSelect";

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState<string>(arr[1])
    const [valueMulti, setValueMulti] = useState<Array<string>>(['JS','CSS'])

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeSuperSelect
                option={arr}
                values={valueMulti}
                setValueMulti={setValueMulti}
            />
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
