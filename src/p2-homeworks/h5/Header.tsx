import React, {useState, MouseEvent} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routre";
import s from "./pages/Pages.module.css"
import './pages/pages.css'

type addedLinkType = {
    id: string
    name: string
    link: string
}

type dataAddedLinkType = {
    preJunior: Array<addedLinkType>
    junior: Array<addedLinkType>
    juniorPlus: Array<addedLinkType>
}

const dataAddedLink: dataAddedLinkType = {
    preJunior: [
        {id: '1', name: "HW1", link: PATH.HW1},
        {id: '2', name: "HW2", link: PATH.HW2},
        {id: '3', name: "HW3", link: PATH.HW3},
        {id: '4', name: "HW4", link: PATH.HW4},
        {id: '5', name: "HW5", link: PATH.HW5},
        {id: '6', name: "HW6", link: PATH.HW6},
    ],
    junior: [
        {id: '7', name: "HW7", link: PATH.HW7},
        {id: '8', name: "HW8", link: PATH.HW8},
        {id: '9', name: "HW9", link: PATH.HW9},
        {id: '10', name: "HW10", link: PATH.HW10},
        {id: '11', name: "HW11", link: PATH.HW11}
    ],
    juniorPlus: [
        {id: '12', name: "HW12", link: PATH.HW12},
        {id: '13', name: "HW13", link: PATH.HW13},
        {id: '14', name: "HW14", link: PATH.HW14},
        {id: '15', name: "HW15", link: PATH.HW15},
        {id: '16', name: "HW16", link: PATH.HW16}
    ]
}


function Header() {
    const [currentPage, setCurrentPage] = useState('PreJunior')
    const [stateJP, setStateJP] = useState<boolean>(true)
    const [menuType, setMenuType] = useState<Array<addedLinkType>>([])

    const onClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
        setCurrentPage(e.currentTarget.id)
    }
    const addedMenuDraw = (array: Array<addedLinkType>) => {
        return (
            <div
                className={s.added__menu}>
                {array.map((data, i) => <NavLink
                    id={data.name}
                    onClick={onClickLink}
                    className={'added__menu__points' + data.id}
                    to={data.link}
                >{data.name}</NavLink>)}
            </div>
        )
    }
    const onMouseOverDraw = (e: MouseEvent<HTMLDivElement>) => {
        setStateJP(true)
    }
    const onMouseOutUnDraw = (e: MouseEvent<HTMLDivElement>) => {
        setStateJP(false)
    }
    const onMouseOverDrawLink = (e: MouseEvent<HTMLAnchorElement>) => {
        onMouseOutUnDrawLink(e)
        const typeArray = e.currentTarget.id
        if (typeArray === 'PreJunior') {
            setMenuType([...dataAddedLink.preJunior])
            onMouseOutUnDrawLink(e)
        } else if (typeArray === 'Junior') {
            setMenuType([...dataAddedLink.junior])
        } else {
            setMenuType([...dataAddedLink.juniorPlus])
        }
        setStateJP(true)
    }
    const onMouseOutUnDrawLink = (e: MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
        setStateJP(false)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.current__link}>
                <div className={s.current__page}>{currentPage}</div>
                <div className={s.button__rigth}><b>{">"}</b></div>
            </div>
            <div
                onMouseEnter={onMouseOverDraw}
                onMouseLeave={onMouseOutUnDraw}
                className={s.wrapper__link}>
                <div className={s.links}>
                    <NavLink
                        id={"PreJunior"}
                        to={PATH.PRE_JUNIOR}
                        onClick={onClickLink}
                        onMouseOver={onMouseOverDrawLink}
                    >PreJunior</NavLink>
                    <NavLink
                        id={"Junior"}
                        to={PATH.JUNIOR}
                        onClick={onClickLink}
                        onMouseOver={onMouseOverDrawLink}
                    >Junior</NavLink>
                    <NavLink
                        id={"JuniorPlus"}
                        to={PATH.JUNIOR_PLUS}
                        onClick={onClickLink}
                        onMouseOver={onMouseOverDrawLink}
                    >JuniorPlus</NavLink>
                </div>
                {stateJP && addedMenuDraw(menuType)}
            </div>
        </div>
    )
}

export default Header
