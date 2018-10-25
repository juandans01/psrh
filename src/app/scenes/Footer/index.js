import React, { Component } from 'react'
import { Wrapper, Logo, Info } from './components/Styled'
import LogoFooter from '../../../assets/logo-footer.svg'
import LinkedinLight from '../../../assets/linkedin-light.svg'

export default class Footer extends Component {


  render(){
    return(
      <div className='pure-g'>
        <Wrapper>
          <div className='pure-u-1-2 pure-u-md-1'>
            <Logo>
              <img
                src={LogoFooter}
                alt='logo-footer'
              />
            </Logo>
          </div>
          <div className='pure-u-1-2 pure-u-md-1'>
            <Info>
              <div className='email'>
                contacto@growinghr.com
              </div>
              <div className='address'>
                <strong>Dirección:</strong> Hit Cowork Av Luis M. Campos 877,<br/>
                Ciudad de Buenos Aires, Argentina
              </div>
              <div className='link'>
                <img
                  src={LinkedinLight}
                  alt='linkedin-light'
                />
              </div>
            </Info>
          </div>                 
        </Wrapper>
      </div>            
    )
  }
}