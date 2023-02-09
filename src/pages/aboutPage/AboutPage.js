import React from 'react'
import Header from '../../components/header/Header'
import './aboutpage.css'

export default function AboutPage() {
    return (
        <div>
            <Header
                headerClass="about-header"
                heading="Your Adventure Awaits"
                text="Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete."
            />
        </div>
    )
}
