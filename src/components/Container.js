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
            <section className="grid-area carousel"><a name="main"/><FirstScreen/></section>
            <section className="grid-area services"><a name="services"/><Services/></section>
            <section className="grid-area about"><a name="about"/><About/></section>
            <section className="grid-area clients"><a name="cases"/><Clients/></section>
            <section className="grid-area reviews"><Reviews/></section>
            <section className="grid-area contacts"><a name="contacts"/><Contacts/></section>
        </article>
    )
}