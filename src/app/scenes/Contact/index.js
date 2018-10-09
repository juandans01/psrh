import React, { Component } from 'react'
import { Wrapper, LeftForm, LeftQuestion, LeftArrow, RightForm, RightQuestion, RightArrow } from './components/Styled'
import LeftArrowSvg from '../../../assets/left-arrow.svg'
import RightArrowSvg from '../../../assets/right-arrow.svg'

export default class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      leftAsked: false,
      leftZIndex: '2',
      rightAsked: false,
      rightZIndex: '2'
    }
  }

  onLeftShowClick = () => {
    this.setState({
      leftAsked: true,
      leftZIndex: '4',
      rightZIndex: '2'
    })
  }

  onLeftHideClick = () => {
    this.setState({
      leftAsked: false,
      leftZIndex: '3'      
    })
  }

  onRightShowClick = () => {
    console.log('gere')
    this.setState({
      rightAsked: true,
      rightZIndex: '4',
      leftZIndex: '2'
    })
  }

  onRightHideClick = () => {
    this.setState({
      rightAsked: false,
      rightZIndex: '3',
    })
  }

  render(){
    return(
      <Wrapper>
        <LeftForm>
          <div>
            <h2>Completá el siguiente formulario:</h2>
            <div>
              <input type='text' placeholder='Nombre y apellido'/>
              <input type='email' placeholder='E-mail'/>
            </div>
            <div>
              <select>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
              </select>
              <input type='text' placeholder="URL perfil Linkedin"/>
            </div>
          </div>
          <button>Enviar</button>
        </LeftForm>
        <LeftQuestion
          asked={this.state.leftAsked}
          leftIndex={this.state.leftZIndex}
        >
            <LeftArrow 
              asked={this.state.leftAsked}
              onClick={this.onLeftHideClick}
            >
              <img
                src={LeftArrowSvg}
                alt='left-arrow'
              />
            </LeftArrow>
            <h2>¿Buscás<br/> un cambio?</h2>
            <button onClick={this.onLeftShowClick}>Dejanos tus datos acá</button>
        </LeftQuestion>
        <RightForm>
          <div>
            <h2>Completá el siguiente formulario:</h2>
            <div>
              <input type='text' placeholder='Nombre y apellido'/>
              <input type='email' placeholder='E-mail'/>
            </div>
            <div>
              <input type='text' placeholder="Empresa"/>
              <input type='text' placeholder="URL perfil Linkedin"/>
            </div>
          </div>
          <button>Enviar</button>
        </RightForm>
        <RightQuestion
          asked={this.state.rightAsked}
          rightIndex={this.state.rightZIndex}
        >
          <RightArrow 
            asked={this.state.rightAsked}
            onClick={this.onRightHideClick}
          >
            <img
              src={RightArrowSvg}
              alt='right-arrow'
            />
          </RightArrow>
          <h2>¿Buscás<br/> un partner?</h2>
          <button onClick={this.onRightShowClick}>Dejanos tus datos acá</button>
        </RightQuestion>
      </Wrapper>
    )
  }
}