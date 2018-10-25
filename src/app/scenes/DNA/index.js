import React, { Component } from 'react'
import { Wrapper, BoxWrapper, Items, Item } from './components/Styled';
import Box from '../../components/Box'

import Chatting from '../../../assets/chatting.svg'
import Accurate from '../../../assets/accurate.svg'
import Engaged from '../../../assets/engaged.svg'
import Agile from '../../../assets/agile.svg'
import Flexible from '../../../assets/flexible.svg'

export default class DNA extends Component {

  render(){
    return(
      <Wrapper>
        <BoxWrapper>
          <Box
            title="ADN Growing"
            boxWidth="300px"
          />
        </BoxWrapper>        
        <Items>
            <div>
              <Item>
                <div className='image-wrapper'>
                  <img src={Chatting} alt='chatting'/>
                  <div className='circles-1'>
                    <div></div>
                    <p></p>
                  </div>
                </div>
                
                <div>Orientados al cliente</div>
                <p>
                  Trabajamos teniendo reuniones
                  de seguimiento y constante
                  diálogo con nuestros clientes.
                </p>
              </Item>
            </div>
            <div>
              <Item>
                <div className='image-wrapper'>
                  <img src={Accurate} alt='chatting'/>
                  <div className='circles-2'>
                    <div></div>
                    <p></p>
                  </div>
                </div>                
                <div>Certeros</div>
                <p>
                  Trabajamos constantemente en
                  afinar nuestra puntería a la hora
                  de huntear a los mejores talentos.
                </p>
              </Item>
              <div className='second'></div>
              <Item>
                <div className='image-wrapper'>
                  <img src={Engaged} alt='chatting'/>
                  <div className='circles-3'>
                    <div></div>
                    <p></p>
                  </div>
                </div>                
                <div>Comprometidos</div>
                <p>
                  Cada búsqueda que trabajamos
                  es un desafío nuevo para nosotros,
                  y un futuro logro por conseguir.
                </p>
              </Item>
            </div>
            <div>
              <Item>
                <div className='image-wrapper'>
                  <img src={Agile} alt='chatting'/>
                  <div className='circles-1'>
                    <div></div>
                    <p></p>
                  </div>
                </div>                       
                <div>Ágiles</div>
                <p>
                  Buscamos trabajar de manera
                  colaborativa con nuestros
                  clientes, para aumentar la
                  calidad y productividad de
                  nuestros procesos.
                </p>
              </Item>
              <div className='third'></div>
              <Item>
                <div className='image-wrapper'>
                  <img src={Flexible} alt='chatting'/>
                  <div className='circles-2'>
                    <div></div>
                    <p></p>
                  </div>
                </div>                        
                <div>Flexibles</div>
                <p>
                  Somos dinámicos, nos adapta-
                  mos a los procesos de nuestros
                  clientes y buscamos constante-
                  mente nuevas formas de reclutar
                  y atraer a nuestros candidatos.
                </p>
              </Item>
            </div>
          </Items>
      </Wrapper>
    )
  }
}