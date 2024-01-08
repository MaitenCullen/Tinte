
import React from 'react'
import { Contact } from './Contact'
import { About } from './About'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Services } from './Services'

export default function Home() {
  return (
    <>
    <About/>
    <Skills/>
    {/*
    <Projects/>  */}
    <Services/>
    <Skills/>
    <Contact/>
    </>
  )
}
