import React, { Component } from 'react'
import Title from '../../components/Title'
import { Wrapper, Left, Right } from './components/Styled'
import HeroAgile from '../../../assets/hero-agile.svg'

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
          <img
            src={HeroAgile}
            alt="hero-agile"
          />
        </Right>
      </Wrapper>
    )
  }
}