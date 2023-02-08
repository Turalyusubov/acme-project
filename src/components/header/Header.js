import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

export default function Header({ heading, text }) {
    return (
        <div className='header'>
            <h1>{heading}</h1>
            <p>{text}</p>
            <Link to='/shop'>Shop Merch</Link>
        </div>
    )
}
