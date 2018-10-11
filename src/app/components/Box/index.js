import React, { Component } from 'react'
import { withTheme } from 'styled-components';
import Text from '../Text'
import { Wrapper, BigSeparator, Title } from './components/Styled'

class Box extends Component {

  render() {
    return (
      <Wrapper
        boxWidth={this.props.boxWidth}
      >
        <Title
          fontSize='35px'
          fontColor={this.props.fontColor ? this.props.fontColor : this.props.theme.greenShade }
          borderColor={this.props.borderColor ? this.props.borderColor : this.props.theme.blueShade}
        >
          {this.props.title}
          {/* <LineSeparator/> */}
          
        </Title>
        <BigSeparator
          borderColor={this.props.borderColor ? this.props.borderColor : this.props.theme.blueShade}
        />
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