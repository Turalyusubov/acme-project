import React from 'react'
import { useParams } from 'react-router-dom'
import { itemsArray } from '../../api/items'
import './itemdetailspage.css'

export default function ItemDetailsPage() {
    const { itemId } = useParams()

    const thisItem = itemsArray.find(item => item.id == itemId)
    console.log(thisItem)
    return (
        <div className='item-details-page'>
            <div className='item-details-page-head custom-container'>
                <h1>{thisItem.name}</h1>
            </div>
            <div className='item-details-page-body custom-container page-section'>
                <div className='item-details-left'>
                    <img src={thisItem.pic} alt='item-pic' />
                    {thisItem.isSale &&
                        <span className='sale'>Sale</span>
                    }
                </div>
                <div className='item-details-right'>
                    <h2>{thisItem.name}</h2>
                    <p>
                        <strong>$ {thisItem.currentPrice} USD</strong>
                    </p>
                    <div className='item-details-about'>
                        <h3>What’s a Rich Text element?</h3>
                        <p>The rich text element allows you to create and format
                            headings, paragraphs, blockquotes, images, and video
                            all in one place instead of having to add and format
                            them individually. Just double-click and easily create
                            content.</p>
                        <h4>Static and dynamic content editing</h4>
                        <p>A rich text element can be used with static or dynamic
                            content. For static content, just drop it into any page
                            and begin editing. For dynamic content, add a rich text
                            field to any collection and then connect a rich text
                            element to that field in the settings panel. Voila!</p>
                        <h4>How to customize formatting for each rich text</h4>
                        <p>Headings, paragraphs, blockquotes, figures, images, and
                            figure captions can all be styled after a class is added
                            to the rich text element using the "When inside of" nested
                            selector system.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
