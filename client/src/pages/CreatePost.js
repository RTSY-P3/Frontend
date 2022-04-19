import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateProject } from "../services/PostServices";

const CreatePost = () => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateProject({
      title: formValues.title,
      body: formValues.body,
      image: formValues.image
    })
    setFormValues({
      title: '',
      body: '',
      image: ''      
    })
    navigate('/myprofile')
  };

  return (
    <div className="createpost">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper"> 
            <input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="Project Title"
              value={formValues.title}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              name="body"
              type="textarea"
              placeholder="Project Details"
              value={formValues.body}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="text"
              name="image"
              placeholder="Image Link"
              value={formValues.image}
              required
            />
          </div>

          <button>
            Submit Post
          </button>
        </form>
    </div>
  )
};

export default CreatePost;
