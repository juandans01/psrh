import React, { Component } from 'react'
import { Wrapper, Title, Menu, MobileMenu } from './components/Styled'
import { scrollTo } from '../../../helpers/styleHelper'
import Logo from '../../../assets/logo-light.svg'
import onClickOutside from 'react-onclickoutside'

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      navMobileVisible: false,
      visible: false
    }
  }

  onMenuIconClick = () => {
    this.setState({
      navMobileVisible: !this.state.navMobileVisible
    })
  }

  handleClickOutside = (evt) => {
    this.setState({
      navMobileVisible: false
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll)
  }

  onWindowScroll = () => {    
    if(window.pageYOffset > 630 && !this.state.visible) {
      this.setState({
        visible: true
      })
    }

    if(window.pageYOffset < 630 && this.state.visible) {
      this.setState({
        visible: false
      })
    }
  }

  render() {
    return (
      <div>
        <Wrapper
          visible={this.state.visible}
        >
            <Title>
              <img src={Logo} alt='logo'/>
            </Title>
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
          </Wrapper>        
      </div>      
    )
  }
}

export default onClickOutside(Header)