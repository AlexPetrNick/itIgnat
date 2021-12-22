import React, {useState, MouseEvent} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routre";
import s from "./pages/Pages.module.css"
import './pages/pages.css'

type addedLinkType = {
    name: string
    link: string
}

type dataAddedLinkType = {
    preJunior: Array<addedLinkType>
    junior: Array<addedLinkType>
    juniorPlus: Array<addedLinkType>
}

const dataAddedLink:dataAddedLinkType = {
    preJunior: [
        {name: "HW1", link: 'as'},
        {name: "HW2", link: 'as'},
        {name: "HW3", link: 'as'},
        {name: "HW4", link: 'as'},
        {name: "HW5", link: 'as'},
        {name: "HW6", link: 'as'},
    ],
    junior: [
        {name: "HW7", link: 'as'},
        {name: "HW8", link: 'as'},
        {name: "HW9", link: 'as'},
        {name: "HW10", link: 'as'},
        {name: "HW11", link: 'as'}
    ],
    juniorPlus: [
        {name: "HW12", link: 'as'},
        {name: "HW13", link: 'as'},
        {name: "HW14", link: 'as'},
        {name: "HW15", link: 'as'},
        {name: "HW16", link: 'as'}
    ]
}



function Header() {
    const [currentPage, setCurrentPage] = useState('PreJunior')
    const [stateJP, setStateJP] = useState<boolean>(true)
    const [menuType, setMenuType] = useState<Array<addedLinkType>>(dataAddedLink.preJunior)

    const onClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
        setCurrentPage(e.currentTarget.id)
    }
    const addedMenuDraw = (array:Array<addedLinkType>) => {
        return (
            <div
                onMouseOut={onMouseOutUnDraw}
                className={s.added__menu}>
                {array.map((data, i) => <a
                    className={'added__menu__points' + i}
                    href={"#"}
                >{data.name}</a>)}
            </div>
        )
    }


    const onMouseOverDraw = (e: MouseEvent<HTMLDivElement>) => {
        setStateJP(true)
        console.log('sdf')
    }
    const onMouseOutUnDraw = (e: MouseEvent<HTMLDivElement>) => {setStateJP(false)}
    const onMouseOverDrawLink = (e: MouseEvent<HTMLAnchorElement>) => {
        const typeArray = e.currentTarget.id
        console.log(typeArray)
        if (typeArray === 'PreJunior') {
            setMenuType(dataAddedLink.preJunior)
        } else if (typeArray === 'Junior') {
            setMenuType(dataAddedLink.junior)
        } else {
            setMenuType(dataAddedLink.juniorPlus)
        }
        setStateJP(true)
    }
    const onMouseOutUnDrawLink = (e: MouseEvent<HTMLAnchorElement|HTMLDivElement>) => { setStateJP(false)    }

    return (
        <div className={s.wrapper}>
            <div className={s.current__link}>
                <div className={s.current__page}>{currentPage}</div>
                <div className={s.button__rigth}><b>{">"}</b></div>
            </div>
            <div
                onMouseOver={onMouseOverDraw}
                className={s.wrapper__link}>
                <div className={s.links}>
                    <NavLink
                        id={"PreJunior"}
                        to={PATH.PRE_JUNIOR}
                        onClick={onClickLink}
                        onMouseOver={onMouseOverDrawLink}
                        onMouseOut={onMouseOutUnDrawLink}
                    >PreJunior</NavLink>
                    <NavLink
                        id={"Junior"}
                        to={PATH.JUNIOR}
                        onClick={onClickLink}
                        onMouseOver={onMouseOverDrawLink}
                        onMouseOut={onMouseOutUnDrawLink}
                    >Junior</NavLink>
                    <NavLink
                        id={"JuniorPlus"}
                        to={PATH.JUNIOR_PLUS}
                        onClick={onClickLink}
                        onMouseOver={onMouseOverDrawLink}
                        onMouseOut={onMouseOutUnDrawLink}
                    >JuniorPlus</NavLink>
                </div>
                {stateJP && addedMenuDraw(menuType) }
            </div>
        </div>
    )
}

export default Header
