import React, { Component } from 'react'
import { injectIntl } from 'react-intl';
import Slider from 'react-slick'
import Map from '../../../assets/map.svg'
import { Wrapper, FirstBackground, SecondBackground, MapWrapper } from './components/Styled'

class Hero extends Component {

  render(){

    const settings = {
      arrows: false,
      infinite: true,      
      slidesToShow:  1,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 1000,
      autoplaySpeed: 12000,
      beforeChange: this.beforeSlideChange,
    }

    return (
      <Wrapper>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <FirstBackground>
            <div>
              <p>
                {this.props.intl.formatMessage({id: 'hero.first'})}
              </p>
            </div>
          </FirstBackground>
          <SecondBackground>
            <div>
              <p>
                {this.props.intl.formatMessage({id: 'hero.second'})}
              </p>
            </div>
          </SecondBackground>
        </Slider>
        <MapWrapper>
          <img
            src={Map}
            alt='map'
          />
        </MapWrapper>
      </Wrapper>
    )
  }
}

export default injectIntl(Hero)