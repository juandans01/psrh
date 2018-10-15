import React, { Component } from 'react'
import { Wrapper } from './components/Styled'
import { Parallax } from 'react-parallax'

export default class ContactHero extends Component {

  render(){
    return(
      <Parallax
        bgImage={require('../../../assets/contact-hero.png')}
        bgImageAlt="contact-hero-background"
        strength={200}
      >
        <Wrapper>
          <h2>Ponete en Contacto!</h2>
        </Wrapper>
      </Parallax>      
    )
  }
}