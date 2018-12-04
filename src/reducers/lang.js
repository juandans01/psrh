import { SET_LANG } from '../actions/lang'

export default function lang (state = 'en', action) {
  switch (action.type) {
    case SET_LANG:
      return action.lang
    default:
      return state
  }
}
