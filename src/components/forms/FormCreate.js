const FormCreate = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Create new Robot</h1>
      <div className="mb-2 col-sm-10">
        <label htmlFor="name" className="form-label">
          Robot Name
        </label>
        <input
          type="text"
          value=""
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
          value=""
          id="url"
          className="form-control"
          placeholder="Enter url image..."
          autoComplete="off"
          onChange={() => {}}
          required
        />
      </div>
      <div className="form-group mb-2 col-sm-10">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select className="form-control" id="exampleFormControlSelect1">
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
        <label htmlFor="birthday" className="form-label">
          Birthday
        </label>
        <input
          type="date"
          id="birthday"
          className="form-control"
          placeholder="Enter your birthday"
          autoComplete="off"
          onChange={() => {}}
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          value=""
          className="form-control"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
          onChange={() => {}}
          required
        />
      </div>
      <button>Create</button>
    </form>
  );
};

export default FormCreate;
