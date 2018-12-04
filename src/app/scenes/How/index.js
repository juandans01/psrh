import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { Wrapper, Block, Main, Foot } from './components/Styled'
import Title from '../../components/Title'

import People from '../../../assets/people.svg'
import Paper from '../../../assets/paper.svg'
import Check from '../../../assets/check.svg'

class How extends Component {

  render(){
    return(
      <Wrapper>
        <Title
          color='primary'
          text={this.props.intl.formatMessage({id: 'how.title'})}
        />
        <Main>
          <Block>
            <img
              alt='paper'
              src={Paper}
            />
            <p>
              {this.props.intl.formatMessage({id: 'how.left'})}
            </p>
          </Block>
          <div></div>
          <Block className='right'>
            <img
              alt='people'
              src={People}
            />
            <p>
              {this.props.intl.formatMessage({id: 'how.right'})}
            </p>
          </Block>
        </Main>
        <Foot>
          <img
            src={Check}
            alt='check'
          />
          <p>
            {this.props.intl.formatMessage({id: 'how.foot'})}
          </p>
        </Foot>
      </Wrapper>
    )
  }
}

export default injectIntl(How)