import React, { Component } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { theme } from '../helpers/theme'
import { global } from '../helpers/styleHelper'
import Hero from './scenes/Hero'
import WhatWeDo from './scenes/WhatWeDo'
import DNA from './scenes/DNA'
import Testimony from './scenes/Testimony'
import Difference from './scenes/Difference'
import Linkedin from './scenes/Linkedin'
import ContactHero from './scenes/ContactHero'
import Contact from './scenes/Contact'
import Footer from './scenes/Footer'

injectGlobal`${global(theme)}` // eslint-disable-line

export default class App extends Component {

  render(){
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Hero/>
          <WhatWeDo/>
          <DNA/>
          <Difference/>
          <Testimony/>
          <Linkedin/>          
          <ContactHero/>
          <Contact/>
          <Footer/>
        </div>
      </ThemeProvider>
    )
  }
}