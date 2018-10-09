import React, { Component } from 'react'
import Box from '../../components/Box'
import { Wrapper } from './components/Styled'


export default class WhatWeDo extends Component {
  render(){
    return(
      <Wrapper>
        <div>
          <Box
            title="¿QUÉ HACEMOS?"
            boxWidth="700px"
            content={(
             <p>
               Trabajamos como partners de nuestros clientes realizando la búsqueda y
              selección de candidatos, brindando consultoría y asesoramiento en sus
              procesos de recursos humanos. Implementamos metodologías ágiles en
              nuestros proyectos con el fin de garantizar calidad y dinamismo, teniendo
              en cuenta las necesidades de nuestros clientes.
             </p> 
            )}
          />
        </div>
      </Wrapper>
    )
  }
}