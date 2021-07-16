import { useCallback, useEffect, useState } from 'react'

export const AuthHook = () => {
  let [token, setToken] = useState(null)

  const login = useCallback((JWTtoken) => {
    setToken(JWTtoken)
    localStorage.setItem('jwt', JWTtoken)
  }, [])
  const logout = useCallback(() => {
    setToken(null)
    localStorage.clear()
  }, [])
  useEffect(() => {
    const data = localStorage.getItem('jwt')
    if (data) {
      setToken(data)
    }
  }, [login])
  return { login, logout, token }
}
