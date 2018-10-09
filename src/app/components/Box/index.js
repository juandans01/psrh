import React, { Component } from 'react'
import { withTheme } from 'styled-components';
import Text from '../Text'
import { Wrapper, LineSeparator, BigSeparator, Title } from './components/Styled'

class Box extends Component {

  render() {
    return (
      <Wrapper
        boxWidth={this.props.boxWidth}
      >
        <Title
          fontSize='35px'
          fontColor={this.props.fontColor ? this.props.fontColor : this.props.theme.greenShade }
        >
          {this.props.title}
          {/* <LineSeparator/> */}
          <BigSeparator/>
        </Title>
        { this.props.content && (
          <Text>
            {this.props.content}
          </Text>
        )}        
      </Wrapper>
    )
  }
}

export default withTheme(Box)