import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdatePost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  let { post_id } = useParams();

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleAuthorChange = (e) => {
    const value = e.target.value;
    setAuthor(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    const url = `http://localhost:5000/posts/${post_id}`;

    fetch(url, {
      method: "put",
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          //redirect user to home page
          navigate("/");
        }
      })
      .catch((err) => {
        //handle errror.
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title"> Title </label>
        <input
          value={title}
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Title"
          onChange={handleTitleChange}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="author"> Author </label>
        <input
          value={author}
          type="text"
          className="form-control"
          id="author"
          placeholder="Enter Author"
          onChange={handleAuthorChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary btn-sm">
        Update
      </button>
    </form>
  );
};

export default UpdatePost;
