
import React from 'react'
import { Contact } from './Contact'
import { About } from './About'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Services } from './Services'
import { Section02 } from './Section02'
import { Work } from './Work'

export default function Home() {
  return (
    <>
    <About/>
    <Work/>
    <Skills/>
    <Services/>
    <Section02/>
    <Projects/>
    <Contact/>
    </>
  )
}
