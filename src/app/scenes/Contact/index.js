import React, { Component } from 'react'
import { Wrapper, LeftForm, LeftQuestion, LeftArrow, RightForm, RightQuestion, RightArrow } from './components/Styled'
import LeftArrowSvg from '../../../assets/left-arrow.svg'
import RightArrowSvg from '../../../assets/right-arrow.svg'
import axios from 'axios'

export default class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      leftAsked: false,
      leftZIndex: '2',
      rightAsked: false,
      rightZIndex: '2',
      leftSuccess: false,
      changeName: '',
      changeEmail: '',
      changeLinkedin: '',
      changeSkill: 'JAVA',
      rightSuccess: false,
      partnerName: '',
      partnerEmail: '',
      partnerCompany: '',
      partnerLinkedin: '',
    }
  }

  onLeftShowClick = () => {
    this.setState({
      leftAsked: true,
      rightAsked: false,
      leftZIndex: '4',
      rightZIndex: '2'
    })
  }

  onLeftHideClick = () => {
    this.setState({
      leftAsked: false,
      leftZIndex: '3'      
    })
  }

  onRightShowClick = () => {
    this.setState({
      rightAsked: true,
      leftAsked: false,
      rightZIndex: '4',
      leftZIndex: '2'
    })
  }

  onRightHideClick = () => {
    this.setState({
      rightAsked: false,
      rightZIndex: '3',
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onLeftSubmit = (e) => {
    e.preventDefault()
    this.sendChange()
  }

  sendChange = async() => {
    const data = {
      service_id: 'gmail',
      template_id: 'growing_contact_form',
      user_id: 'user_dfpmoloiIfg3QWP3aWtJK',
      template_params: {
        from_name: this.state.changeName,
        from_email: this.state.changeEmail,
        skill: this.state.changeSkill,
        linkedin_url: this.state.changeLinkedin && this.state.changeLinkedin.length > 0 ? this.state.changeLinkedin : 'No completado' 
      }
    }
    this.setState({
      leftSuccess: true
    })

    const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)    
  }

  onRightSubmit = (e) => {
    e.preventDefault()
    this.sendPartner()    
  }

  sendPartner = async() => {
    const data = {
      service_id: 'gmail',
      template_id: 'growing_partner_contact_form',
      user_id: 'user_dfpmoloiIfg3QWP3aWtJK',
      template_params: {
        from_name: this.state.partnerName,
        from_email: this.state.partnerEmail,
        company: this.state.partnerCompany,
        linkedin_url: this.state.partnerLinkedin && this.state.partnerLinkedin.length > 0 ? this.state.partnerLinkedin : 'No completado' 
      }
    }
    this.setState({
      rightSuccess: true
    })

    const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)    
  }

  render(){
    return(
      <Wrapper id='contact'>
        <div>
        <LeftForm
          onSubmit={this.onLeftSubmit}
        >
          { this.state.leftSuccess ? (
            <div>
              <h2>Mensaje enviado!</h2>              
              <h4>en breve te estaremos contactando</h4>
            </div>
          ) : [
            <div key='left-form'>            
              <h2>Completá el siguiente formulario:</h2>
              <div>
                <input required name='changeName' value={this.state.changeName} type='text' onChange={this.onChange} placeholder='Nombre y apellido'/>
                <input required name='changeEmail' value={this.state.changeEmail} type='email'  onChange={this.onChange} placeholder='E-mail'/>
              </div>
              <div>
                <select name='changeSkill' value={this.state.changeSkill} onChange={this.onChange}>              
                  <option value='JAVA'>JAVA</option>
                  <option value='PHP'>PHP</option>
                  <option value='.NET'>.NET</option>
                  <option value='NODE JS'>NODE JS</option>
                  <option value='PYTHON'>PYTHON</option>
                  <option value='RUBY'>RUBY</option>
                  <option value='REACT'>REACT</option>
                  <option value='ANGULAR JS'>ANGULAR JS</option>
                  <option value='VIEW JS'>VIEW JS</option>
                  <option value='REACT NATIVE'>REACT NATIVE</option>
                  <option value='IOS'>IOS</option>
                  <option value='ANDROID'>ANDROID</option>
                  <option value='IONIC'>IONIC</option>
                  <option value='HTML & CSS'>HTML & CSS</option>
                  <option value='SCALA'>SCALA</option>
                  <option value='AWS'>AWS</option>
                  <option value='AZURE'>AZURE</option>
                  <option value='SELENIUM'>CYPRESS</option>
                  <option value='SOLIDITY'>SOLIDITY</option>
                </select>
                <input value={this.state.changeLinkedin} name='changeLinkedin' type='text' placeholder="URL perfil Linkedin" onChange={this.onChange}/>
              </div>
            </div>,
            <button key='left-button'>Enviar</button>
          ]}
          
        </LeftForm>
        <LeftQuestion
          asked={this.state.leftAsked}
          leftIndex={this.state.leftZIndex}
        >
            <LeftArrow 
              asked={this.state.leftAsked}
              onClick={this.onLeftHideClick}
            >
              <img
                src={LeftArrowSvg}
                alt='left-arrow'
              />
            </LeftArrow>
            <h2>¿Buscás<br/> un cambio?</h2>
            <button onClick={this.onLeftShowClick}>Dejanos tus datos acá</button>
        </LeftQuestion>
        </div>        
        <div>
        <RightForm
          onSubmit={this.onRightSubmit}
        >
          { this.state.rightSuccess ? (
            <div>
              <h2>Mensaje enviado!</h2>              
              <h4>en breve te estaremos contactando</h4>
            </div>
          ) : [
            <div key='right-form'>
              <h2>Completá el siguiente formulario:</h2>
              <div>
                <input name='partnerName' onChange={this.onChange} value={this.state.partnerName} required type='text' placeholder='Nombre y apellido'/>
                <input name='partnerEmail' onChange={this.onChange} value={this.state.partnerEmail} required type='email' placeholder='E-mail'/>
              </div>
              <div>
                <input name='partnerCompany' onChange={this.onChange} value={this.state.partnerCompany} required type='text' placeholder="Empresa"/>
                <input name='partnerLinkedin' onChange={this.onChange} value={this.state.partnerLinkedin} type='text' placeholder="URL perfil Linkedin"/>
              </div>
            </div>,
            <button key='right-button'>Enviar</button>
          ]}          
        </RightForm>
        <RightQuestion
          asked={this.state.rightAsked}
          rightIndex={this.state.rightZIndex}
        >
          <RightArrow 
            asked={this.state.rightAsked}
            onClick={this.onRightHideClick}
          >
            <img
              src={RightArrowSvg}
              alt='right-arrow'
            />
          </RightArrow>
          <h2>¿Buscás<br/> un partner?</h2>
          <button onClick={this.onRightShowClick}>Dejanos tus datos acá</button>
        </RightQuestion>
        </div>        
      </Wrapper>
    )
  }
}