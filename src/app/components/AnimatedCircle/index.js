import posed from 'react-pose'

export default posed.div({
  attention: {
    scale: 1.2,
    transition: {
      type: 'spring',
      stiffness: 5,
      damping: 0
    }
  }
})