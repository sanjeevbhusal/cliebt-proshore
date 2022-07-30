const CardDetails = ({ cardDetails }) => {
  const {
    title,
    description,
    image_url,
    post_url,
    author_name,
    author_description,
    category,
    event_date,
    event_location,
    event_website_url,
    event_appointment_url,
    id,
  } = cardDetails;
  return (
    <div className="card w-25">
      <img src={image_url} className="card-img-top" alt={title} />
      {category === "blog" ? (
        <div className="card-body">
          <h6 className="card-title">
            <a href={post_url}>{title}</a>
          </h6>
          <p className="card-text">{description}</p>
          <p className="card-author">{author_name}</p>
          <p className="card-text">{author_description}</p>
          <a
            href={`/posts/update/${id}`}
            className="btn btn-outline-primary btn-sm"
          >
            Update Blog
          </a>
          <a
            href={`/posts/delete/${id}`}
            className="btn btn-outline-danger btn-sm"
          >
            Delete Blog
          </a>
        </div>
      ) : (
        <div className="card-body" style={{ background: "#fdb142" }}>
          <h5 className="card-title">
            <a href={post_url}>{title}</a>
          </h5>
          <h5 className="card-text">{event_location}</h5>
          <p className="card-text">
            <small className="text-white">{event_date}</small>
          </p>
          <p className="card-text">
            <a href={event_website_url}>Website</a>
          </p>
          <p className="card-text">
            {" "}
            <a href={event_appointment_url}>Appointment</a>
          </p>
          <a
            href={`/posts/update/${id}`}
            className="btn btn-outline-primary btn-sm"
          >
            Update Blog
          </a>
          <a
            href={`/posts/delete/${id}`}
            className="btn btn-outline-danger btn-sm"
          >
            Delete Blog
          </a>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
