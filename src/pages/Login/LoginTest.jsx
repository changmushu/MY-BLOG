import React, { useState } from 'react'

const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.is(username, 'bili') && Object.is(password, 'bili')) {
        console.log(username, password)
        resolve('success')
      } else {
        console.log(username, password)
        reject('error')
      }
    }, 1000)
  })
}

function LoginTest() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSumbitting] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const handleSumbit = async (e) => {
    e.preventDefault()
    setIsSumbitting(true)
    try {
      await login({ username, password })
      setUsername('')
      setPassword('')
      setError('')
      setIsSumbitting(false)
      setIsLogin(true)
    } catch (error) {
      setUsername('')
      setPassword('')
      setError('incorrect username or password')
      setIsSumbitting(false)
    }
  }
  const logout = () => {
    setIsLogin(false)
  }
  return (
    <div className="login">
      {isLogin ? (
        <>
          <h1>Welcome {username}✅🐸</h1>
          <button onClick={logout} className="loginRegisterButton">
            Logout
          </button>
        </>
      ) : (
        <div className="loginForm">
          <h1 className="loginForm">React Login</h1>
          {error && (
            <>
              <h1 className="loginForm">{error}</h1>
            </>
          )}
          <form onSubmit={handleSumbit}>
            <div className="loginForm">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="loginInput"
                id="exampleInputEmail1"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="loginForm">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                value={password}
                className="loginInput"
                onChange={(e) => setPassword(e.currentTarget.value)}
                id="exampleInputPassword1"
              />
            </div>
            <button
              type="submit"
              className="loginRegisterButton"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'submitting' : 'submit'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginTest