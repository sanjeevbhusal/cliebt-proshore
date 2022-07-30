import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DeletePost = ({ deleteBlog }) => {
  let { post_id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/posts/${post_id}`;

    fetch(url, {
      method: "delete",
    })
      .then((res) => {
        if (res.status === 200) {
          //redirect user to home page
          deleteBlog(post_id);
          navigate("/");
        }
      })
      .catch((err) => {
        //handle error.
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h4> You are going to delete the blog.</h4>
      <button
        type="submit"
        className="btn btn-primary btn-sm"
        onClick={handleSubmit}
      >
        Confirm Delete
      </button>
      <p class="text-muted">
        <small>This task is irreversible.</small>
      </p>
    </div>
  );
};

export default DeletePost;
