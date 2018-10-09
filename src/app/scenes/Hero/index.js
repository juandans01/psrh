import React, { Component } from 'react'
import Title from '../../components/Title'
import { Wrapper, Left, Right } from './components/Styled'

export default class Hero extends Component {

  render() {
    return (
      <Wrapper>
        <Left>
          <Title>Hero</Title>
          <p>
            consultora de recursos humanos especializada en
            brindar soluciones para startups y empresas, de
            Tecnología y Producto digital.
          </p>
        </Left>
        <Right>
          <div>
            <Title
              fontStyle='italic'
            >
              something something
            </Title>
          </div>
        </Right>
      </Wrapper>
    )
  }
}