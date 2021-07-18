import { useCallback, useEffect, useState } from 'react'

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options,
  }

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey
    let optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }

  document.cookie = updatedCookie
}

export const AuthHook = () => {
  let [token, setToken] = useState(null)

  const login = useCallback((JWTtoken) => {
    setToken(JWTtoken)
    document.cookie = `JWT=${JWTtoken}`
    //localStorage.setItem('jwt', JSON.stringify({ token: JWTtoken }))
  }, [])
  const logout = useCallback(() => {
    setToken(null)
    function deleteCookie(name) {
      setCookie(name, '', {
        'max-age': -1,
      })
    }
    deleteCookie('JWT')
    localStorage.clear()
  }, [])
  useEffect(() => {
    function getCookie(name) {
      let matches = document.cookie.match(
        new RegExp(
          '(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)'
        )
      )
      return matches ? decodeURIComponent(matches[1]) : undefined
    }
    const cookie = getCookie('JWT')
    const data = JSON.parse(localStorage.getItem('jwt'))
    /* if (data && data.token) {
      login(data.token)
    } */
    if (cookie) {
      login(cookie)
    }
  }, [token, login])
  return { login, logout, token }
}
