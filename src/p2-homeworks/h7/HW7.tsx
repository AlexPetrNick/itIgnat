import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {AlternativeSuperSelect} from "./common/c5-SuperSelect/AlternativeSuperSelect";
import {AlternativeSuperRadio} from "./common/c6-SuperRadio/AlternativeSuperRadio";



const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState<string>(arr[1])
    const [valueMulti, setValueMulti] = useState<Array<string>>(['x'])

    const removeValueCallback = (val: string) => setValueMulti(valueMulti.filter(v => v !== val))
    const addValueCallback = (val:string) => setValueMulti([...valueMulti, val])

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
                removeValue={removeValueCallback}
                addValue={addValueCallback}
            />
            <AlternativeSuperRadio
                option={arr}
                values={valueMulti}
                removeValue={removeValueCallback}
                addValue={addValueCallback}
            />
            <hr/>
        </div>
    )
}

export default HW7
