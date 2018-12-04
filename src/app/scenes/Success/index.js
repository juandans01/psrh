import React, { Component } from 'react'
import { injectIntl } from 'react-intl';
import { Wrapper, Slide, PTitle, Dots } from './components/Styled'
import Title  from '../../components/Title'
import Slider from 'react-slick'

class Success extends Component {

  constructor(props){
    super(props)
    this.state = { 

    }
  }

  goToSlide = (index) => {
    this.slider.slickPause()
    this.slider.slickGoTo(index)
    this.slider.slickPlay()
  }

  render(){
    const settings = {
      arrows: false,
      infinite: true,      
      slidesToShow:  1,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 1000,
      autoplaySpeed: 12000,      
      vertical: true,
      verticalSwiping: true,
    }

    return (
      <Wrapper>
        <Title
          text={this.props.intl.formatMessage({id: 'success.title'})}
          borderWhite
        />        
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <Slide>
            <div>
              <p>
                <PTitle>{this.props.intl.formatMessage({id: 'success.slide1.first'})}</PTitle>
              </p>
              <p>
                <PTitle>{this.props.intl.formatMessage({id: 'success.second.title'})}</PTitle>: {this.props.intl.formatMessage({id: 'success.slide1.second.text'})}
              </p>
              <p>
                <PTitle>{this.props.intl.formatMessage({id: 'success.third.title'})}</PTitle>: {this.props.intl.formatMessage({id: 'success.slide1.third.text'})}
              </p>
            </div>
          </Slide>
          <Slide>
            <div>
              <p>
                <PTitle>{this.props.intl.formatMessage({id: 'success.slide2.first'})}</PTitle>
              </p>
              <p>
                <PTitle>{this.props.intl.formatMessage({id: 'success.second.title'})}</PTitle>: {this.props.intl.formatMessage({id: 'success.slide2.second.text'})}
              </p>
              <p>
                <PTitle>{this.props.intl.formatMessage({id: 'success.third.title'})}</PTitle>: {this.props.intl.formatMessage({id: 'success.slide2.third.text'})}
              </p>
            </div>
          </Slide>
          <Slide>
            <div>
              <p>
                <PTitle>{this.props.intl.formatMessage({id: 'success.slide3.first'})}</PTitle>
              </p>
              <p>
                <PTitle>{this.props.intl.formatMessage({id: 'success.second.title'})}</PTitle>: {this.props.intl.formatMessage({id: 'success.slide3.second.text'})}
              </p>
              <p>
                <PTitle>{this.props.intl.formatMessage({id: 'success.third.title'})}</PTitle>: {this.props.intl.formatMessage({id: 'success.slide3.third.text'})}
              </p>
            </div>
          </Slide>
        </Slider>
        <Dots>
          <div>
            <li className={this.state.firstActive === '0' ? 'active' : ''} onClick={() => {this.goToSlide(0)}}></li>
            <li className={this.state.firstActive === '1' ? 'active' : ''} onClick={() => {this.goToSlide(1)}}></li>
            <li className={this.state.firstActive === '2' ? 'active' : ''} onClick={() => {this.goToSlide(2)}}></li>                                
          </div>
        </Dots>
      </Wrapper>
    )
  }
}

export default injectIntl(Success)