import React from 'react'
import './donations.css'
import { Link } from 'react-router-dom'

export default function Donations() {
    return (
        <div className='donations-section custom-container page-section'>
            <div className='donations-container'>
                <Link to='/'>Donate $100</Link>
                <Link to='/'>Donate $50</Link>
                <Link to='/'>Donate $25</Link>
                <Link to='/'>Donate $15</Link>
                <Link to='/'>Donate $5</Link>
            </div>
        </div>
    )
}
