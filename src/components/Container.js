import React from 'react'
import '../styles/Container.css'
import FirstScreen from './FirstScreen'
import Services from './Services'
import About from './About'
import Clients from './Clients'
import Reviews from './Reviews'
import Contacts from './Contacts'

export default function Container () {
    return (
        <article className="resume">
            <section className="grid-area carousel"><FirstScreen/></section>
            <section className="grid-area services"><Services/></section>
            <section className="grid-area about"><About/></section>
            <section className="grid-area clients"><Clients/></section>
            <section className="grid-area reviews"><Reviews/></section>
            <section className="grid-area contacts"><Contacts/></section>
        </article>
    )
}