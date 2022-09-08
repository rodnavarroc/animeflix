import React from 'react'
import appContext from '../../context/appContext'
import { useContext } from 'react'

import { HiMenuAlt2 } from 'react-icons/hi'
import { GrHomeRounded } from 'react-icons/gr'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'
import { AiOutlineDoubleLeft } from 'react-icons/ai'

const Navigation = () => {

    const context = useContext(appContext)

    const {
        open,
        openMenu
    } = context;

    return (
        <div className={`navigationFullContainer ${open ? 'openMenu' : ''}`}>

            <div className="navigationBar">
                <div className="desktop">
                    <div className="close" onClick={() => openMenu(!open)}>
                        <AiOutlineDoubleLeft style={{ fill: 'white' }} />
                    </div>
                    <div className="item">
                        <GrHomeRounded style={{ fill: 'white' }} />
                    </div>
                    <div className="item">
                        <BsFillPersonFill style={{ fill: 'white' }} />
                    </div>
                    <div className="item">
                        <IoMdSettings style={{ fill: 'white' }} />
                    </div>
                    <div className="endOfList" />
                </div>
            </div>

            <div className="navigationContainer">
                <div className="item logo">
                    <HiMenuAlt2 style={{
                        color: 'white',
                        fontSize: '24px',
                        cursor: 'pointer'
                    }}
                        onClick={() => openMenu(!open)}
                    />
                    <h1>animeflix</h1>
                </div>
                <div className="item options">
                    <div className="option search">
                        <input type="text" value="Search your favorites here..." />
                    </div>
                    <div className="option profile">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation