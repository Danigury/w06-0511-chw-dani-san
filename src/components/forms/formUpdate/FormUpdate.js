const FormUpdate = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <h1>Create new Robot</h1>
      <div className="mb-2 col-sm-10">
        <label htmlFor="name" className="form-label">
          New Robot Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Robot name..."
          autoComplete="off"
          onChange={() => {}}
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="url" className="form-label">
          Image/Url
        </label>
        <input
          type="text"
          id="url"
          className="form-control"
          placeholder="Enter url image..."
          autoComplete="off"
          onChange={() => {}}
          required
        />
      </div>
      <div className="form-group mb-2 col-sm-10">
        <label htmlFor="speed">New speed</label>
        <select className="form-control" id="speed">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="form-group mb-2 col-sm-10">
        <label htmlFor="stamina">New stamina</label>
        <select className="form-control" id="stamina">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="creationDate" className="form-label">
          Change the creation date
        </label>
        <input
          type="date"
          id="creationDate"
          className="form-control"
          placeholder="Date of creation..."
          autoComplete="off"
          onChange={() => {}}
          required
        />
      </div>

      <button type="button" className="btn btn-primary">
        Update Robot
      </button>
    </form>
  );
};

export default FormUpdate;
