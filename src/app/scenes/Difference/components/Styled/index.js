import styled from 'styled-components'
import TargetImage from '../../../../../assets/target.png'

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Differences = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;  
  padding: 30px;
  > div {
    width: 200px;
    padding: 50px;
    border: 2px solid ${props => props.theme.blueShade};

    .image {
      display: flex;
      justify-content: center;
      align-items: center;      
    }

    .number {
      font-weight: 900;
      color: ${props => props.theme.greenShade};
    }
  }
`

export const Target = styled.div`
  margin-top: 50px;
  height: 500px;
  position: relative;
  width: 100%;

  .image {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 500px;
    width: 400px;
    background: url(${TargetImage}) no-repeat 50% 50% / cover;
  }

  .content {
    right: 0;   
  }
`