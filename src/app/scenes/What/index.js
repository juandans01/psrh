import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import Title from '../../components/Title'
import { Wrapper } from './components/Styled'

class What extends Component {
  render(){
    return(
      <Wrapper
        id='what'
      >
        <Title
          color='primary'
          text={this.props.intl.formatMessage({id: 'what.title'})}
        />
        <p>
          {this.props.intl.formatMessage({id: 'what.description'})}
        </p>
      </Wrapper>
    )
  }
}

export default injectIntl(What)