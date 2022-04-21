import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateComment } from "../services/PostServices";

const Update = ({ user, authenticated }) => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [formValues, setFormValues] = useState({
    body: "",
    userId: user.id,
  });
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateComment(formValues);
    setFormValues({ body: "" });
    navigate("/feed");
  };

  return (
    <div className="comment">
      {/* {update ?
    <form onSubmit={handleSubmit}>
        <input name='body' type='text' placeholder='Leave Comment Here' onChange={handleChange} value= {formValues.body}></input>
        <button className="submit-button" type='submit'>Submit</button>
    </form> : */}
    </div>
  );
};
export default Update;