import React, { Component } from 'react'
import { Wrapper, Border } from './components/Styled'

export default class Title extends Component {

  render(){
    console.log(this.props.borderWhite)
    return (
      <Wrapper
        color={this.props.color}        
      >
        <div>
          {this.props.text.toUpperCase()}
        </div>      
        <Border
          borderWhite={this.props.borderWhite}
        />
      </Wrapper>
    )
  }
}