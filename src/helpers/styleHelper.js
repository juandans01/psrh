import { css } from 'styled-components'
import { normalize } from 'polished'
import { fadeInKeyframe } from './keyframes'
import { animateScroll } from 'react-scroll'
import PureCSS from './vendor/PureCSS'

export function fadeIn () {
  return css`
    opacity: 0.5;
    animation: forwards ${fadeInKeyframe} 400ms ease-in;
  `
}

export const breakpoints = {
  'ts': 1023,
  'md': 767,
  'sm': 540,
  'xs': 375
}

export const bp = function (id, type = 'max-width', delta = 0) {
  if (!breakpoints[id]) {
    console.warn(`Breakpoint ${id} do not exists.`)
    return () => null
  }

  return (...args) => css`
    @media (${type}: ${breakpoints[id] + delta}px) {
      ${css(...args)}
    }
  `
}

export const global = (theme) => css`
  ${normalize()}
  ${PureCSS.grid()}
  ${PureCSS.gridResponsive(breakpoints)}

  html {
    font: 16px/1 'Poppins', sans-serif;
    color: ${theme.greyShade};
    background: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .pure-g [class*="pure-u"] {
    font: 16px/1 'Poppins', sans-serif;
  }

  strong {
    font-weight: 700;
  }
` 

export const scrollTo = (nodeId, customOffset = 0) => {
  setTimeout(() => {
    const element = document.getElementById(nodeId)
    if (!element) return false
    const windowOffsetTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
    const value = element.getBoundingClientRect().top + windowOffsetTop + customOffset
    animateScroll.scrollTo(value, {
      duration: 800,
      smooth: 'easeInOutCubic'
    })
  }, 200)

  return true
}
