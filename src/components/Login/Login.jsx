import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Login.css'

const Login = () => {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }

    const onChangeUsername=(event)=>{
        setUsername(event.target.value)
    }

    const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
    </>
  )

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-field"
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
    </>
  )

  const onSubmitSuccess=()=>{
    localStorage.setItem('isLogin','true')
    navigate('/',{replace:true})
  }

  const onSubmitForm=async event=>{
    event.preventDefault()
    const url='https://apis.ccbp.in/login'
    const userDetails={username,password}
    const options={
        method:"POST",
        body:JSON.stringify(userDetails),
    }
    const response=await fetch(url,options)
    const fetched=await response.json()
    console.log(fetched)

    if(response.ok===true){
        onSubmitSuccess()
    }
  }

  return (
    <div className="login-form-container">
      <img src="https://www.shutterstock.com/image-vector/refer-friend-speech-bubble-banner-260nw-2613537555.jpg"
       alt="Refer a Friend" className="login-website-logo-mobile-img"/>
      <form onSubmit={onSubmitForm} className="form-container">
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button">LOGIN</button>
      </form>
    </div>
  )
}

export default Login
