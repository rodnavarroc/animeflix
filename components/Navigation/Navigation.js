import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'

const Navigation = () => {
    return (
        <div className="navigationContainer">
            <div className="item logo">
                <HiMenuAlt2 style={{
                    color: 'white',
                    fontSize: '24px'
                }}
                />
                <h1>animeflix</h1>
            </div>
            <div className="item options">
                <div className="option search">
                    <input type="text" value="Search here..." />
                </div>
                <div className="option profile">
                </div>
            </div>
        </div>
    )
}

export default Navigation