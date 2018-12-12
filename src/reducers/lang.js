import { SET_LANG } from '../actions/lang'

export default function lang (state = 'es', action) {
  switch (action.type) {
    case SET_LANG:
      return action.lang
    default:
      return state
  }
}
