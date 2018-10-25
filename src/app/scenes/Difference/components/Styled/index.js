import styled from 'styled-components'
import TargetImage from '../../../../../assets/target.png'
import DifferenceBackground from '../../../../../assets/difference-background.svg'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${DifferenceBackground}) no-repeat 50% 100% / auto;
`

export const Differences = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 30px;
  ${bp('ts')`
    flex-direction: column;
    padding: 0;
  `}
  > div {
    width: 200px;
    padding: 50px;
    border: 2px solid ${props => props.theme.blueShade};

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .icon {
      z-index: 2;
    }

    .first-animation {
      position: absolute;
      > div{ 
        margin: 15px;
      }
    }

    .second-animation {
      position: absolute;
      > div{ 
        margin: 15px;
      }
    }

    .third-animation {
      position: absolute;
      > div{ 
        margin: 15px;
      }
    }


    .big-circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
    }

    .small-circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
    }


    .number {
      font-weight: 900;
      color: ${props => props.theme.greenShade};
    }

    > p {
      line-height: 1.4;
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
    width: 600px;
    background: url(${TargetImage}) no-repeat 50% 50% / cover;
    ${bp('ts')`
      display: none;
    `}
  }

  .content {
    position: absolute;
    right: 0;
    top: 100px;
    z-index: 2;
    background-color: ${props => props.theme.blueShade};
    padding: 50px 100px 50px 50px;
    ${bp('ts')`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 0;
    `}    

    > p {
      margin-top: 10px
      line-height: 1.4;
      color: white;
      width: 500px;

      ${bp('ts')`
        width: auto;
        padding: 0 10px;
      `}
    }
  }
`