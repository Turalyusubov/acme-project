import React from 'react'
import './featureditem.css'
import { itemsArray } from '../../../api/items'

export default function FeaturedItem() {
    const featuredItem = itemsArray.find(item => item.isFeatured)
    return (
        <div className='featured-item-container'>
            <h4 className='featured-item-title'>{featuredItem.name}</h4>
            <p className='featured-item-price'>$ {featuredItem.currentPrice} USD</p>
            <span className='featured-item-label'>Featured Item</span>
        </div>
    )
}
