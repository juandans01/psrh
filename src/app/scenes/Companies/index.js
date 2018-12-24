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

import Tagiffy from '../../../assets/companies/tagiffy-logo.png'
import Tog from '../../../assets/companies/tog-logo.png'
import Say from '../../../assets/companies/say-logo.png'
import Resolution from '../../../assets/companies/resolution-logo.png'
import Naranja from '../../../assets/companies/naranja-logo.png'
import Latcom from '../../../assets/companies/latcom-logo.png'
import A from '../../../assets/companies/a-logo.png'
import Galicia from '../../../assets/companies/galicia-logo.png'
import InvertirOnline from '../../../assets/companies/invertir-online-logo.png'
import Chili from '../../../assets/companies/chili-logo.png'
import Vrainz from '../../../assets/companies/vrainz-logo.png'

import Wunder from '../../../assets/companies/wunder-logo.png'
import CrediCuotas from '../../../assets/companies/credicuotas-logo.png'
import XPandit from '../../../assets/companies/xpandit-logo.png'
import Ripio from '../../../assets/companies/ripio-logo.png'

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
              alt='bluesmart'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Cuoma}
              alt='cuoma'
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Dariens}
              alt='dariens'
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={GlobalMind}
              alt='global-mind'
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Billo}
              alt='billo'
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Lemmonet}
              alt='lemmonet'
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Mec}
              alt='mec'
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={MercadoLibre}
              alt='mercado-libre'
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Prisma}
              alt='prisma'
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={Point}
              alt='point'
            />
            </div>
          </Slide>
          <Slide>
          <div>
            <img
              src={PontaMedia}
              alt='ponta-media'
            />
            </div>
          </Slide>
          <Slide>
            <div>
              <img
                src={Smart}
                alt='smart'
              />
            </div>             
          </Slide>
          <Slide>
            <div>
            <img
              src={Tagiffy}
              alt='tagiffy'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Tog}
              alt='tog'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Say}
              alt='say'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Resolution}
              alt='resolution'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Naranja}
              alt='naranja'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Latcom}
              alt='latcom'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={A}
              alt='a'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Galicia}
              alt='galicia'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={InvertirOnline}
              alt='invertir-online'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Chili}
              alt='chili'
            />
            </div>
          </Slide>
          <Slide>
            <div>
            <img
              src={Vrainz}
              alt='vrainz'
            />
            </div>
          </Slide>
          <Slide>
            <div>
              <img
                src={Wunder}
                alt='wunder'
              />
            </div>
          </Slide>
          <Slide>
            <div>
              <img
                src={CrediCuotas}
                alt='credicuotas'
              />
            </div>
          </Slide>
          <Slide>
            <div>
              <img
                src={XPandit}
                alt='xpandit'
              />
            </div>
          </Slide>
          <Slide>
            <div>
              <img
                src={Ripio}
                alt='ripio'
              />
            </div>
          </Slide>
        </Slider>
      </Wrapper>
    )
  }
}