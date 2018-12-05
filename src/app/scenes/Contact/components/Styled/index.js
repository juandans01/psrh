import styled from 'styled-components'
import Background from '../../../../../assets/contacto-degrade.png'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  color: white;
  height: 300px;
  background: url(${Background}) no-repeat 0% 0% / cover;
  padding-top: 60px;
  display: flex;
  justify-content: space-evenly;

  > div {
    > h2 {
      margin: 2px 0;
      font-weight: 900;
    }
  }

  ${bp('md')`
      display: flex;
      flex-direction: column;
      align-items: center;
  `}
`

export const Input = styled.input`  
  height: 20px;
  border: none;
  padding: 8px 3px;
  width: 150px;
  margin: 5px;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: center;

    > textarea {
      padding: 8px 3px;
      margin: 5px 5px;
      width: 100%;
      height: 70px;
    }
  }
`

export const Button = styled.button`  
  margin-top: 10px;
  padding: 8px 20px;
  background: rgba(0,0,0,0);
  color: white;
  border: 1px solid white;
  border-radius: 2px;
`