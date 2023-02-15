import React from 'react'
import './items.css'
import { itemsArray } from '../../../api/items'
import Item from '../../../components/item/Item'
import { Link } from 'react-router-dom'

export default function Items() {
    const notFeaturedItems = itemsArray.filter(item => !item.isFeatured)
    const notFeaturedItemElements = notFeaturedItems.map(item =>
        <Item
            key={item.id}
            id={item.id}
            img={item.pic}
            title={item.name}
            currentPrice={item.currentPrice}
            isSale={item.isSale}
        />
    )
    return (
        <div className='items-section'>
            <div className='categories-container'>
                <p>Shop by Category</p>
                <Link to='/'>Gift Cards</Link>
                <Link to='/'>Tents</Link>
                <Link to='/'>Accessories</Link>
                <Link to='/'>Packs</Link>
            </div>
            <div className='items-container'>
                {notFeaturedItemElements}
            </div>
        </div>
    )
}
