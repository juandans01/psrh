import React, { Component } from 'react'
import { Wrapper, Input, InputsWrapper, Button } from './components/Styled'
import axios from 'axios'
import { injectIntl } from 'react-intl'

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      from_name: '',
      from_email: '',
      company: '',
      phone: '',
      message: ''
    }
  }


  sendEmail = async() => {
    const data = {
      service_id: 'gmail',
      template_id: 'something',
      user_id: 'user_something',
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

  render(){    
    return(
      <Wrapper id='contact'>
        <div>
          <h2>{this.props.intl.formatMessage({id: 'contact.title'})}</h2>
          <div>
          {this.props.intl.formatMessage({id: 'contact.subtitle'})}
          </div>
        </div>
        <InputsWrapper>
          <div>
            <Input/>
            <Input/>
          </div>
          <div>
            <Input/>
            <Input/>
          </div>
          <div>
            <textarea/>
          </div>
          <div>
            <Button>Enviar</Button>
          </div>
        </InputsWrapper>
      </Wrapper>
    )
  }
}

export default injectIntl(Contact)