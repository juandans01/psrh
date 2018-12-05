import React, { Component } from 'react'
import { Wrapper, Slide } from './components/Styled'
import Slider from 'react-slick'

import Bluesmart from '../../../assets/companies/BLUESMART-LOGO.png'
import Cuoma from '../../../assets/companies/CUOMA-LOGO.png'
import Dariens from '../../../assets/companies/DARIENS-LOGO.png'
import GlobalMind from '../../../assets/companies/GLOBAL-MIND-LOGO.png'
import Billo from '../../../assets/companies/I-BILLIONARIE-LOGO.png'
import Lemmonet from '../../../assets/companies/LEMMONET-LOGO.png'
import Mec from '../../../assets/companies/MEC-LOGO.png'
import MercadoLibre from '../../../assets/companies/MERCADO-LIBRE-LOGO.png'
import Point from '../../../assets/companies/POINTCENOT-LOGO.png'
import PontaMedia from '../../../assets/companies/PONTA-MEDIA-LOGO.png'
import Prisma from '../../../assets/companies/PRISMA-LOGO.png'
import Smart from '../../../assets/companies/SMART-LOGO.png'

export default class Companies extends Component {

  render(){
    const settings = {
      arrows: false,
      infinite: true,
      slidesToShow:  4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,            
          }
        }
      ]
    }
    
    return (
      <Wrapper>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <Slide>
            <div>
            <img
              src={Bluesmart}
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Cuoma}
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Dariens}
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={GlobalMind}
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Billo}
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Lemmonet}
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Mec}
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={MercadoLibre}
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Prisma}
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Point}
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={PontaMedia}
            />
            </div>
          </Slide>
          <Slide>
            <div>
              <img
                src={Smart}
              />
            </div>             
          </Slide>
        </Slider>
      </Wrapper>
    )
  }
}