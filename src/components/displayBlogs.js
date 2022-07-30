const DisplayBlogs = ({ blogs }) => {
  return (
    <div>
      <div class="search-bar">
        <input type="search" placeholder="Search" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <h1>sasas</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href={blog.post_url}>{blog.title}</a>
                </td>
                <td>{blog.description}</td>
                <td>{blog.author_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayBlogs;
