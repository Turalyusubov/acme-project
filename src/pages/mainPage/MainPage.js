import React from 'react'
import Header from '../../components/header/Header'
import SupportWays from './supportWays/SupportWays'
import { Link } from 'react-router-dom'
import './mainpage.css'

export default function MainPage() {
    return (
        <div>
            <Header
                btnType="transparent-btn"
                headerClass="main-header"
                heading="Serving you since 1989."
                text="Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City."
            />
            <SupportWays />
            <Header
                btnType="white-btn"
                headerClass="covid-info"
                heading="How we're keeping you safe during COVID-19"
                text="As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members."
            />
        </div>
    )
}
