import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'
import AlternativeAffairs from "./AlternativeAffairs";

export type FilterType = 'all' | 'middle' | 'high' | 'low'

export type AffairType = {
    _id: number,
    name: string,
    priority: string
}

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs
    return affairs.filter(data => data.priority === filter)
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): any => { // need to fix any
    return affairs.filter(data => data._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')
    const [completed, setCompleted] = useState<Array<AffairType>>([])

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    const addCompletedAffairs = (affair:AffairType):void => {
        setCompleted([...completed, affair])
    }

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    filter={filter}
                    deleteAffairCallback={deleteAffairCallback}
                    addCompletedAffairs={addCompletedAffairs}
                />
            </div>

            <hr/>
            <AlternativeAffairs
                affairs={completed}
            />
            <hr/>
        </div>
    )
}

export default HW2
