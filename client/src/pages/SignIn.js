import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInUser } from "../services/Auth";
import "../styles/signin.css"

const SignIn = (props) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/feed')
  };

  return (
    <div className="sign-in-page">
      <div className='signIn-leftside'></div>
      <div className="screen__content">
          <div>
            <h3 className='signin-description'>Welcome back! Please sign back in.</h3>
            <h1 className='signin-header'>Welcome back</h1>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login_field">
              <label className="email">Email</label>
              <input
                className="login_input"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email your email"
                value={formValues.email}
                required
              />
            </div>

            <div className="login_field">
              <label className="password">Password</label>
              <input
                className="login_input"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formValues.password}
                required
              />
            </div>
            <button className='login_signin' disabled={!formValues.email || !formValues.password}>
              Sign In
            </button>

            
            <p className='signin-intro'>Don’t have an account? <a href="/register"><strong style={{ color:'#5E3DD3'}}>Sign up now!</strong></a></p>
          </form>
          <div className='counter'></div>
        </div>
      </div>
  );
};

export default SignIn;
