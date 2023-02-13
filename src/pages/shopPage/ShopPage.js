import React from 'react'
import './shoppage.css'
import Items from './items/Items'
import FeaturedItem from './featuredItem/FeaturedItem'

export default function ShopPage() {
    return (
        <div className='shoppage'>
            <div className='shoppage-head container'>
                <h1>Shop Our Products</h1>
            </div>
            <div className='shoppage-body container'>
                <FeaturedItem />
                <Items />
            </div>
        </div>
    )
}
