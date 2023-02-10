import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

export default function Header({ heading, text, headerClass, btnType }) {
    return (
        <div className={`header container ${headerClass}`}>
            <h1>{heading}</h1>
            <p>{text}</p>

            {btnType === "transparent-btn" ?
                <div className={btnType}>
                    <Link to='/shop'>Shop Merch</Link>
                </div> :
                <div className={btnType}>
                    <Link to='/respond-to-covid'>Read Our Statement</Link>
                </div>
            }
        </div>
    )
}

// https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e83f98bae1ad80129fcd7e5_wu-jianxiong-UniC8xhlzaE-unsplash.jpg
// header img
