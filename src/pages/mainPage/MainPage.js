import React from 'react'
import Header from '../../components/header/Header'
import SupportWays from './supportWays/SupportWays'
import './mainpage.css'

export default function MainPage() {
    return (
        <div>
            <Header
                headerClass="main-header"
                heading="Serving you since 1989."
                text="Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City."
            />
            <SupportWays />
        </div>
    )
}
