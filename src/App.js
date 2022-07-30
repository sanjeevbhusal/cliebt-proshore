import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./app.css";
import UpdatePost from "./components/UpdatePost";
import DeletePost from "./components/DeletePost";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const handleDelete = (blogId) => {
    let updatedBlogs = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(updatedBlogs);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Card blogs={blogs} setBlogs={setBlogs} />}
        ></Route>
        <Route
          path="/posts"
          element={<Card blogs={blogs} setBlogs={setBlogs} />}
        ></Route>
        <Route path="/posts/update/:post_id" element={<UpdatePost />}></Route>
        <Route
          path="/posts/delete/:post_id"
          element={
            <DeletePost deleteBlog={(blog_id) => handleDelete(blog_id)} />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
