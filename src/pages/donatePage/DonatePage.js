import React from 'react'
import './donatepage.css'
import DonateHeader from './donateHeader/DonateHeader'
import Donations from './donations/Donations'

export default function DonatePage() {
    return (
        <div>
            <DonateHeader />
            <Donations />
        </div>
    )
}
