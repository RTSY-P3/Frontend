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
      <div className="screen">	
        <div className="screen__content">



          <form className="login" onSubmit={handleSubmit}>
            <div className="login_field">
              <label htmlFor="email"></label>
              <i class="login__icon fas fa-user"></i>
              <input
                className="login_input"
                id="login_input"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                value={formValues.email}
                required
              />
            </div>
            
            <div className="login_field">
              <label htmlFor="password"></label>
              <input
                className="login_input"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                required
              />
            </div>
            <button className='signin' disabled={!formValues.email || !formValues.password}>
              Sign In
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
