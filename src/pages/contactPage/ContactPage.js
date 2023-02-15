import React from 'react'
import ContactForm from './contactForm/ContactForm'
import ContactHeader from './contactHeader/ContactHeader'
import './contactpage.css'

export default function ContactPage() {
    return (
        <div>
            <ContactHeader />
            <ContactForm />
        </div>
    )
}
