import React, { Component } from 'react'
import { Wrapper, Profile } from './components/Styled'
import LinkedinDark from '../../../assets/linkedin-dark.svg'
import SkypeDark from  '../../../assets/skype-logo.svg'
import Marian from '../../../assets/marian-pic.jpg'
import Juan from '../../../assets/juan-pic.jpg'

export default class Linkedin extends Component {

  render(){
    return(
      <Wrapper>
        <Profile
          pic={Marian}
        >
          <div className='face'></div>
          <div className='name'>Mariano Pombo</div>
          <div className='tag'>Co-Founder</div>
          <div className='images'>
            <img
              className='skype-logo'
              src={SkypeDark}
              alt='face'
            />
            <div>
              mariano.pombo  |
            </div>
            <a href='https://www.linkedin.com/in/marianopombo' target='_blank' rel="noopener noreferrer">
              <img
                className='linkedin-logo'
                src={LinkedinDark}
                alt='face'
              />
            </a>
          </div>          
        </Profile>
        <Profile
          pic={Juan}
        >
          <div className='face'></div>
          <div className='name'>Juan Ensinck</div>
          <div className='tag'>Co-Founder</div>
          <div className='images'>            
            <img
              className='skype-logo'
              src={SkypeDark}
              alt='face'
            />
            <div>
              juan.ensinck |
            </div>
            <a href='https://www.linkedin.com/in/juanensinck' target='_blank' rel="noopener noreferrer">
              <img
                className='linkedin-logo'
                src={LinkedinDark}
                alt='face'
              />
            </a>            
          </div>
        </Profile>
      </Wrapper>
    )
  }
}