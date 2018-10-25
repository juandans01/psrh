import React, { Component } from 'react'
import Title from '../../components/Title'
import { Wrapper, Left, Right, Dots, BackWrapper, MenuWrapper, MenuTitle, Menu, MobileMenu } from './components/Styled'
import { scrollTo } from '../../../helpers/styleHelper'
import Logo from '../../../assets/logo-light.svg'
import HeroAgile from '../../../assets/hero-agile.svg'
import Dot from '../../../assets/hero-dot.svg'

export default class Hero extends Component {

  constructor(props){
    super(props)
    this.state = {
      navMobileVisible: false,
    }
  }

  onMenuIconClick = () => {
    this.setState({
      navMobileVisible: !this.state.navMobileVisible
    })
  }

  render() {
    return (
      <Wrapper>
        <BackWrapper>
          <MenuWrapper>
              <MenuTitle>
                <img src={Logo} alt='logo'/>
              </MenuTitle>
              <Menu className={this.state.navMobileVisible ? 'mobile-visible' : null}>
                  <div onClick={() => {scrollTo('culture', -70)}}>Home</div>
                  <div onClick={() => {scrollTo('solutions', -70)}}>Como trabajamos</div>
                  <div onClick={() => {scrollTo('clients', -100)}}>Contacto</div>            
              </Menu>        
              <MobileMenu onClick={this.onMenuIconClick}>
                <button type='button'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 139 139'>
                    <path d='M26.5 46.3h86' />
                    <path d='M26.5 92.7h86' />
                    <path d='M26.5 69.5h86' />
                    <path d='M26.5 69.5h86' />
                  </svg>
                </button>
              </MobileMenu>
          </MenuWrapper>
          <Left>
            <Title
              fontSize="50px"
            >
              Somos<br/>
              GROWING-HR,
            </Title>
            <p>
              consultora de recursos humanos especializada en
              brindar soluciones para startups y empresas, de
              Tecnología y Producto digital.
            </p>
          </Left>
          <Right>
            <img
              src={HeroAgile}
              alt="hero-agile"
            />
          </Right>
        </BackWrapper>        
        <Dots
          src={Dot}
          alt='dot'
        />
      </Wrapper>
    )
  }
}