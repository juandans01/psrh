import React, { Component } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import { theme } from '../helpers/theme'
import { global } from '../helpers/styleHelper'
import Header from './scenes/Header'
import Hero from './scenes/Hero'
import What from './scenes/What'
import How from './scenes/How'
import Mission from './scenes/Mission'
import Success from './scenes/Success'
import Contact from './scenes/Contact'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeDataEn from 'react-intl/locale-data/en'
import localeDataEs from 'react-intl/locale-data/es'
import messages from '../intl.json'

addLocaleData([...localeDataEn, ...localeDataEs])

injectGlobal`${global(theme)}` // eslint-disable-line


class App extends Component {

  render(){
    console.log(this.props.lang)
    return (
        <IntlProvider
          key={ this.props.lang.lang }
          locale={this.props.lang.lang}
          messages={messages[this.props.lang.lang]}
        >
          <ThemeProvider theme={theme}>
            <div>
              <Header/>
              <Hero/>
              <What/>
              <How/>
              <Mission/>
              <Success/>
              <Contact/>
            </div>
          </ThemeProvider>
        </IntlProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app
  }
}

export default connect(
  mapStateToProps,
  null
)(App)