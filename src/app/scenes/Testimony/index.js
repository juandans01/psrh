import React, { Component } from 'react'
import { Wrapper, Slide, Dots, SlideContent } from './components/Styled'
import Slider from 'react-slick'
import { withTheme } from 'styled-components';

import GreenUp from '../../../assets/test-green-up.svg'
import GreenLow from '../../../assets/test-green-low.svg'

import BlueUp from '../../../assets/test-blue-up.svg'
import BlueLow from '../../../assets/test-blue-low.svg'

class Testimony extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: '0',
      background: 'green'
    }
  }
  goToSlide = (index) => {
    this.setState({
      active: '' + index,
    })    
    this.slider.slickPause()
    this.slider.slickGoTo(index)
    this.slider.slickPlay()
  }

  beforeSlideChange = (oldIndex, newIndex) => {    

    this.setState({
      active: '' + newIndex,
      background: this.state.background === 'green' ? 'blue' : 'green'
    })
  }

  
  render(){
    console.log(this.props.theme.greenShade)
    const settings = {
      arrows: false,
      infinite: true,      
      slidesToShow:  1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 12000,
      beforeChange: this.beforeSlideChange,
    }
    return(
      <Wrapper>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <Slide
            customBackground={this.props.theme.greenShade}
          >
            <SlideContent>                            
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={GreenUp}
                  alt='green-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                  Creemos en la relación con el cliente, más allá de cubrir
                  búsquedas encontrando y seleccionando a las personas
                  indicadas, nos orientamos a ser partners en sus procesos
                  de selección, pudiendo asistir y proporcionar las mejores
                  prácticas para cumplir con los objetivos establecidos.
                </div>
                <div className='author'>
                  Dolores Canónico - Talent Accquisition Specialist - Iúnigo
                </div>
                <img
                  className='low'
                  src={GreenLow}
                  alt='green-low'
                />
              </div>                        
            </SlideContent>            
          </Slide>
          <Slide
            customBackground={this.props.theme.blueShade}
          >
            <SlideContent>
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={BlueUp}
                  alt='blue-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                  Creemos en la relación con el cliente, más allá de cubrir
                  búsquedas encontrando y seleccionando a las personas
                  indicadas, nos orientamos a ser partners en sus procesos
                  de selección, pudiendo asistir y proporcionar las mejores
                  prácticas para cumplir con los objetivos establecidos.
                </div>
                <div className='author'>
                  Dolores Canónico - Talent Accquisition Specialist - Iúnigo
                </div>
                <img
                  className='low'
                  src={BlueLow}
                  alt='blue-low'
                />
              </div>              
            </SlideContent>            
          </Slide>
          <Slide
            customBackground={this.props.theme.greenShade}
          >
            <SlideContent>
              <div className='content-wrapper'>
                <img
                  className='up'
                  src={GreenUp}
                  alt='green-up'
                />
                <div className="title">
                  TESTIMONIOS
                </div>
                <div className='content'>
                  Creemos en la relación con el cliente, más allá de cubrir
                  búsquedas encontrando y seleccionando a las personas
                  indicadas, nos orientamos a ser partners en sus procesos
                  de selección, pudiendo asistir y proporcionar las mejores
                  prácticas para cumplir con los objetivos establecidos.
                </div>
                <div className='author'>
                  Dolores Canónico - Talent Accquisition Specialist - Iúnigo
                </div>
                <img
                  className='low'
                  src={GreenLow}
                  alt='green-low'
                />
              </div>
            </SlideContent>
          </Slide>
        </Slider>
        <Dots
          backgroundColor={this.state.background}
        >
          <div>
            <li className={this.state.active === '0' ? 'active' : ''} onClick={() => {this.goToSlide(0)}}></li>
            <li className={this.state.active === '1' ? 'active' : ''} onClick={() => {this.goToSlide(1)}}></li>
            <li className={this.state.active === '2' ? 'active' : ''} onClick={() => {this.goToSlide(2)}}></li>                
          </div>
        </Dots>
      </Wrapper>
    )
  }
}


export default withTheme(Testimony)