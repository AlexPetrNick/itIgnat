import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Routes, Route} from "react-router-dom";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";
import {HW1} from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import HW6 from "../h6/HW6";
import HW5 from "./HW5";
import HW8 from "../h8/HW8";
import HW7 from "../h7/HW7";
import HW9 from "../h9/HW9";
import HW10 from "../h10/HW10";
import HW11 from "../h11/HW11";
import HW12 from "../h12/HW12";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    HW1: '/pre-junior/hw1',
    HW2: '/pre-junior/hw2',
    HW3: '/pre-junior/hw3',
    HW4: '/pre-junior/hw4',
    HW5: '/pre-junior/hw5',
    HW6: '/pre-junior/hw6',
    JUNIOR: '/junior',
    HW7: '/pre-junior/hw7',
    HW8: '/pre-junior/hw8',
    HW9: '/pre-junior/hw9',
    HW10: '/pre-junior/hw10',
    HW11: '/pre-junior/hw11',
    JUNIOR_PLUS: '/junior-plus',
    HW12: '/pre-junior/hw12',
    HW13: '/pre-junior/hw13',
    HW14: '/pre-junior/hw14',
    HW15: '/pre-junior/hw15',
    HW16: '/pre-junior/hw16',
    NULL: 'ex'
}

function Routre() {
    return (
        <div>
            <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.HW1} element={<HW1/>}/>
                <Route path={PATH.HW2} element={<HW2/>}/>
                <Route path={PATH.HW3} element={<HW3/>}/>
                <Route path={PATH.HW4} element={<HW4/>}/>
                <Route path={PATH.HW5} element={<HW5/>}/>
                <Route path={PATH.HW6} element={<HW6/>}/>
                <Route path={PATH.HW7} element={<HW7/>}/>
                <Route path={PATH.HW8} element={<HW8/>}/>
                <Route path={PATH.HW9} element={<HW9/>}/>
                <Route path={PATH.HW10} element={<HW10/>}/>
                <Route path={PATH.HW11} element={<HW11/>}/>
                <Route path={PATH.HW12} element={<HW12/>}/>
                <Route path={PATH.HW13} element={<HW12/>}/>
                <Route path={PATH.HW14} element={<HW12/>}/>
                <Route path={PATH.HW15} element={<HW12/>}/>
                <Route path={PATH.HW16} element={<HW12/>}/>
                <Route path={'*'} element={<Error404/>}/>
                <Route path={'/'} element={<PreJunior/>}/>
            </Routes>
        </div>
    )
}

export default Routre
