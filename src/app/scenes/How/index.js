import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { Wrapper, Block, Main, Foot, Line1Wrapper, Line2Wrapper } from './components/Styled'
import Title from '../../components/Title'

import People from '../../../assets/people.svg'
import Paper from '../../../assets/paper.svg'
import Check from '../../../assets/check.svg'
import Line1 from '../../../assets/line1.svg'
import Line2 from '../../../assets/line2.svg'

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
          <Line1Wrapper>
            <img
              src={Line1}
              alt='line-1'
            />
          </Line1Wrapper>
          <Block className='right'>
            <img
              alt='people'
              src={People}
            />
            <p>
              {this.props.intl.formatMessage({id: 'how.right'})}
            </p>
          </Block>
          <Line2Wrapper>
            <img
              src={Line2}
              alt='line-2'
            />
          </Line2Wrapper>
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