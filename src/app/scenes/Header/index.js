import React, { Component } from 'react'
import { Wrapper, Title, Menu, MobileMenu, Language } from './components/Styled'
import { scrollTo } from '../../../helpers/styleHelper'
import { connect } from 'react-redux'
import Logo from '../../../assets/logo.svg'
import Lang from '../../../assets/lang.svg'
import onClickOutside from 'react-onclickoutside'
import { injectIntl } from 'react-intl';
import { setLang } from '../../../actions/lang'


class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      navMobileVisible: false,
      visible: false,
      selectValue: 'en'
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
    // window.addEventListener('scroll', this.onWindowScroll)
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

  onSelectChange = (e) => {
    console.log(e.target.value)
    this.setState({
      selectValue: e.target.value
    }, () => {
      this.props.setLang(this.state.selectValue)
    })
  }

  render() {
    return (
      <div>
        <Wrapper          
        >
            <Title>
              <img src={Logo} alt='logo'/>
            </Title>
            <Menu className={this.state.navMobileVisible ? 'mobile-visible' : null}>
                <div onClick={() => {scrollTo('hero', -70)}}>{this.props.intl.formatMessage({id: 'header.what'})}</div>
                <div onClick={() => {scrollTo('dna', -70)}}>{this.props.intl.formatMessage({id: 'header.mission'})}</div>
                <div onClick={() => {scrollTo('contact', -100)}}>{this.props.intl.formatMessage({id: 'header.success'})}</div>
                <div onClick={() => {scrollTo('contact', -100)}}>{this.props.intl.formatMessage({id: 'header.contact'})}</div>
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
            <Language>
              <img
                src={Lang}
                alt='lang'
              />
              <select onChange={this.onSelectChange} value={this.state.selectValue}>
                <option value='es'>ESP</option>
                <option value='en'>ENG</option>
              </select>
            </Language>
          </Wrapper>        
      </div>      
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (lang) => dispatch(setLang(lang)),    
  }
}

export default connect(
  null,
  mapDispatchToProps
)(onClickOutside(injectIntl(Header)))