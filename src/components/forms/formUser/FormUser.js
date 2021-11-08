import { useState } from "react";
import { useDispatch } from "react-redux";

const FormUser = () => {
  const user = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(user);
  const onChange = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const changeUserData = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputUsername">Email</label>
          <input
            type="username"
            className="form-control"
            id="inputUsername"
            placeholder="Username"
            value={userData.username}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            onChange={onChange}
            value={userData.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </div>
    </form>
  );
};

export default FormUser;
