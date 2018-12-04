import store from 'store'
/*
 * action types
 */

export const SET_LANG = 'SET_LANG'

/*
 * action creators
 */

export function setLang (lang) {
  store.set('lang', lang)
  return {
    type: SET_LANG,
    lang
  }
}
