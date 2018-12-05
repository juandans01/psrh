import React, { Component } from 'react'
import { injectIntl } from 'react-intl';
import Slider from 'react-slick'
import Map from '../../../assets/map.svg'
import { Wrapper, FirstBackground, SecondBackground, MapWrapper } from './components/Styled'
import AnimatedCircle from '../../components/AnimatedCircle'


class Hero extends Component {

  render(){

    const settings = {
      arrows: false,
      infinite: true,      
      slidesToShow:  1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 12000    
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
          <div>
            <img
              src={Map}
              alt='map'
            />
            <AnimatedCircle
              className='argentina'
              initialPose='none'
              pose='attention'
            />
            <AnimatedCircle
              className='chile'
              initialPose='none'
              pose='attention'
            />
            <AnimatedCircle
              className='peru'
              initialPose='none'
              pose='attention'
            />
            <AnimatedCircle
              className='colombia'
              initialPose='none'
              pose='attention'
            />
            <AnimatedCircle
              className='usa'
              initialPose='none'
              pose='attention'
            />
          </div>
        </MapWrapper>
      </Wrapper>
    )
  }
}

export default injectIntl(Hero)