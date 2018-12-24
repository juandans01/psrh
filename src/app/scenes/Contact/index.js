import React, { Component } from 'react'
import { Wrapper, Input, InputsWrapper, Button, FormWrapper, Info } from './components/Styled'
import axios from 'axios'
import Mercurias from '../../../assets/mercurias.svg'
import { injectIntl } from 'react-intl'

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      success: false
    }
  }


  sendEmail = async(e) => {
    e.preventDefault()
    const data = {
      service_id: 'gmail',
      template_id: 'contact',
      user_id: 'user_ktSg46K7iS1IsIEYiwvgn',
      template_params: {
        from_name: this.state.name,
        from_email: this.state.email,
        company: this.state.company,
        phone: this.state.phone,
        message: this.state.message        
      }
    }

    this.setState({
      success: true
    })    

    const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){    
    return(
      <Wrapper id='contact'>
        <FormWrapper>
          <div
            key='head'
          >
            <h2>{this.props.intl.formatMessage({id: 'contact.title'})}</h2>
            { !this.state.success && (
              <div>
                {this.props.intl.formatMessage({id: 'contact.subtitle'})}:
              </div>
            )}
            <Info>
              <div>
                {this.props.intl.formatMessage({id: 'contact.address'})}: <br/>Niceto  Vega  4736, PB. Palermo  Soho . Buenos Aires.
              </div>
              <div>
                {this.props.intl.formatMessage({id: 'contact.cellphone'})} ARG: <br/>+54911 5343 4406
              </div>
              <div>
                {this.props.intl.formatMessage({id: 'contact.cellphone'})} USA: <br/>+1 305 7781955
              </div>
            </Info>
          </div>            
          {this.state.success ? (
            <div>
              <div>
              {this.props.intl.formatMessage({id: 'contact.success'})}
              </div>
            </div>
          ) : (
            <InputsWrapper
            key='body'
          >
            <form
              onSubmit={this.sendEmail}
            >
              <div>
                <Input
                  name='name'
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder={this.props.intl.formatMessage({id: 'contact.name'})}
                />
                <Input
                  name='email'
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder={this.props.intl.formatMessage({id: 'contact.email'})}
                />
              </div>
              <div>
                <Input
                  name='company'
                  required
                  value={this.state.company}
                  onChange={this.handleChange}
                  placeholder={this.props.intl.formatMessage({id: 'contact.company'})}
                />
                <Input
                  name='phone'
                  required
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder={this.props.intl.formatMessage({id: 'contact.phone'})}
                />
              </div>
              <div>
                <textarea
                  name='message'
                  required
                  value={this.state.message}
                  onChange={this.handleChange}
                  placeholder={this.props.intl.formatMessage({id: 'contact.message'})}
                />
              </div>
              <div>
                <Button                
                >{this.props.intl.formatMessage({id: 'contact.button'})}</Button>
              </div>
            </form>
            </InputsWrapper>
          )}          
        </FormWrapper>
        <div className='mercurias'>
          <div>{this.props.intl.formatMessage({id: 'contact.mercurias'})}</div>          
          <img src={Mercurias} alt='mercurias'/>
        </div>
      </Wrapper>
    )
  }
}

export default injectIntl(Contact)