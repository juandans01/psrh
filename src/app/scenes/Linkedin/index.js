import React, { Component } from 'react'
import { Wrapper, Profile } from './components/Styled'
import LinkedinDark from '../../../assets/linkedin-dark.svg'

export default class Linkedin extends Component {

  render(){
    return(
      <Wrapper>
        <Profile>
          <img
            className='face'
            src="https://via.placeholder.com/350x150?text=Pombo"
            alt='face'
          />
          <div className='name'>Mariano Pombo</div>
          <div className='tag'>Co-Founder</div>
          <img
            className='logo'
            src={LinkedinDark}
            alt='face'
          />
        </Profile>
        <Profile>
          <img
            className='face'
            src="https://via.placeholder.com/350x150?text=Juan"
            alt='face'
          />
          <div className='name'>Juan Ensinck</div>
          <div className='tag'>Co-Founder</div>
          <img
            className='logo'
            src={LinkedinDark}
            alt='face'
          />
        </Profile>
      </Wrapper>
    )
  }
}