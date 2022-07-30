import CardDetails from "./CardDetails";
import { useState } from "react";

const Card = ({ blogs, setBlogs }) => {
  const [inputText, setInputText] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const handleChange = (e) => {
    let value = e.target.value;
    setInputText(value);
  };

  const handleSearch = () => {
    let searchedBlogs = blogs.filter((blog) => {
      if (blog.title.toLowerCase().includes(inputText.toLowerCase())) {
        return blog;
      }
    });
    setBlogs(searchedBlogs);
    // setInputText("");
  };
  return (
    <div>
      <div className="input-group">
        <div className="form-outline">
          <input
            value={inputText}
            type="search"
            id="form1"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form1">
            Search
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="w-100 d-flex flex-wrap">
        {blogs.map((blog, index) => (
          <CardDetails cardDetails={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Card;
