import { Link } from "react-router-dom"
import "./Login.css"


export default function LoginTest() {

  
  return (
    <div className="login">
        <apan className="loginTitle">Login</apan>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" ref="username" className="loginInput" placeholder="Enter Your email..."/>
            <label>Password</label>
            <input type="password" ref="password" className="loginInput" placeholder="Enter Your password..."/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
            <Link className="link" to ="/register">Register</Link>
        </button>
    </div>
  )
}

