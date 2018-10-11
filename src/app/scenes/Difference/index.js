import React, { Component } from 'react'
import { Wrapper, Differences, Target } from './components/Styled'
import { withTheme } from 'styled-components'
import Box from '../../components/Box'

import Difference1 from '../../../assets/difference1.svg'
import Difference2 from '../../../assets/difference2.svg'
import Difference3 from '../../../assets/difference3.svg'

class Difference extends Component {

  render(){
    return(
      <Wrapper>
        <div>
          <Box
            title="NUESTRO DIFERENCIAL"
          />
        </div>
        <Differences>
          <div>
            <div className='image'>
              <img
                src={Difference1}
                alt='difference1'
              />
            </div>            
            <p className='number'>01</p>
            <p>
              Incorporamos metodologías
              ágiles, que nos brinda la
              flexibilidad necesaria para
              mejorar nuestros procesos y
              mantener informado a
              nuestros clientes del avance
              de nuestras búsquedas.
            </p>
          </div>
          <div>
            <div className='image'>
              <img
                src={Difference2}
                alt='difference2'
              />
            </div>            
            <p className='number'>02</p>
            <p>
              Nos mantenemos
              actualizados sobre las
              nuevas tecnologías y nos
              interiorizamos en ellas,
              pudiendo ser más certeros
              en el momento presentar
              candidatos.
            </p>
          </div>
          <div>
            <div className='image'>
              <img
                src={Difference3}
                alt='difference3'
              />
            </div>            
            <p className='number'>03</p>
            <p>
              Conocimiento exhaustivo
              del mercado IT teniendo en
              claro cuáles son las
              empresas target para cada
              búsqueda y cuáles son las
              líneas de carrera de cada
              uno de los perfiles.
            </p>
          </div>
        </Differences>
        <Target>
          <div className='image'></div>
          <div className='content'>
            <Box
              fontColor="white"
              borderColor={this.props.theme.greenShade} 
              title="OBJETIVO"
            />
            <p>
              Creemos en la relación con el cliente, más allá de cubrir
              búsquedas encontrando y seleccionando a las personas
              indicadas, nos orientamos a ser partners en sus procesos
              de selección, pudiendo asistir y proporcionar las mejores
              prácticas para cumplir con los objetivos establecidos.
            </p>
          </div>
        </Target>
      </Wrapper>
    )
  }
}

export default withTheme(Difference)