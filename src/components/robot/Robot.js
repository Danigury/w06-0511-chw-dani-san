const Robot = ({ src, name, speed, stamina, creationDate }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          src={src}
          width="100%"
          height="225"
          alt="Robot"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
        <h2 className="robot_name">{name}</h2>
        <div className="card-body">
          <p className="card-text">Features: </p>
          <ul className="robot_features_list">
            <li className="robot_features_item">Speed {speed}</li>
            <li className="robot_features_item">Stamina {stamina}</li>
            <li className="robot_features_item">
              Creation Date {creationDate}
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Delete
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robot;
