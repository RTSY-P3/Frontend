import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateProject } from "../services/PostServices";

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
      <form className="col" onSubmit={handleSubmit}>
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

        <button>Submit Post</button>
      </form>
    </div>
  ): (
    <div>
        <h3>You must be signed in to do that! Please log in.</h3>
        <button onClick={() => navigate('/signin')}> Sign in</button>
    </div>
)
};

export default CreatePost;
