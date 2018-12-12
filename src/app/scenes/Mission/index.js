import React,{ Component } from 'react'
import { injectIntl } from 'react-intl';
import { Wrapper, Left, Right, ImagesWrapper } from './components/Styled'
import Title from '../../components/Title'

import Mission2 from '../../../assets/mission2.jpg'
import Mission3 from '../../../assets/mission3.jpg'

class Mission extends Component {

  render(){
    return (
      <Wrapper
        id='mission'
      >
        <Left>
        </Left>
        <Right>
          <Title
            color='primary'
            text={this.props.intl.formatMessage({id: 'mission.title'})}
          />
          <p>
            {this.props.intl.formatMessage({id: 'mission.description'})}
          </p>
          <ImagesWrapper>
            <img
              src={Mission2}
              alt='mission2'
            />
            <img
              src={Mission3}
              alt='mission3'
            />
          </ImagesWrapper>
        </Right>
      </Wrapper>
    )
  }
}

export default injectIntl(Mission)