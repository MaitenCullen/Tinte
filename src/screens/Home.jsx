
import React from 'react'
import { Contact } from './Contact'
import { Header } from './Header'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Services } from './Services'

export default function Home() {
  return (
    <>
    <Header/>
    <Skills/>
    <Projects/> 
    <Services/>
    <Contact/>
    </>
  )
}
