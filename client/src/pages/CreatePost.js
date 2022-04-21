import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateProject } from "../services/PostServices";
import '../styles/createpost.css'
import Footer from '../components/Footer'

const CreatePost = ( {user, authenticated } ) => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    title: "",
    body: "",
    image: "",
    userId: user.id
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateProject(formValues);
    setFormValues({
      title: "",
      body: "",
      image: "",
    });
    navigate("/myprofile");
  };

  return (user && authenticated) ? (
    <div className="createpost">
      <div className="createpost_content">
        <h3 className='create-post'>What are you working on?</h3>
      </div>
      <div>
      <form className="col" onSubmit={handleSubmit}>
        <div className="create-wrapper">
          <label className="creat-lable">Let’s begin with the name</label>
          <input
          className="create-input"
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Project Title"
            value={formValues.title}
            required
          />
        </div>
        <div className="create-wrapper">
        <label className="creat-lable">Next, set the thumbnail photos</label>
        <input
          className="create-input"
            onChange={handleChange}
            type="text"
            name="image"
            placeholder="Image Link"
            value={formValues.image}
            required
          />
        </div>
        <div className="create-wrapper">
        <label className="creat-lable">Tell everyone about your project</label>
          <input
          className="create-input"
            onChange={handleChange}
            name="body"
            type="textarea"
            placeholder="Project Details"
            value={formValues.body}
            required
          />
        </div>
        <button className='landingbutton' >Submit Post</button>
      </form>
    </div>
    <Footer />
    </div>
  ): (
    <div className="must-signin" 
    style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'200px'}}>
        <h3 
        style={{  fontSize:'36px' }}className="signin-header">
            Oops, we fucked up sorry! 💩 </h3>
            <button style={{ margin:'10px 0' }}className="landingbutton" onClick={() => navigate('/signin')}> Sign in</button>
            <button className="landingbuttonSignin" onClick={() => navigate('/')}>Back to Home</button>
        </div>
)
};

export default CreatePost;
