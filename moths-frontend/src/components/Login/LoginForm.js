import "./LoginForm.scss";
import { useState } from "react";

export default function LoginForm(props) {
  const formData = { username: "", password: "" };
  const [details, setDetails] = useState(formData);
  const [error, setError] = useState({ message: "" });

  const user = { username: "mike", password: "raptor" };

  const changeHandle = (event) => {
    setDetails((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandle = (event) => {
    event.preventDefault();
    console.log(details);
    if (
      details.username === user.username &&
      details.password === user.password
    ) {
      console.log("Logged in");
    } else {
      setError({ message: "Username or Password is Incorrect" });
    }
  };

  return (
    <div className={props.className}>
      <h2>Login to your account.</h2>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="Username"
          className="text-field"
          value={details.username}
          name="username"
          onChange={changeHandle}
        />
        <input
          type="password"
          placeholder="Password"
          className="text-field"
          value={details.password}
          onChange={changeHandle}
          name="password"
        />
        <button>Login </button>
        <button type="button">Sign Up</button>
      </form>
      {error.message && error.message}
    </div>
  );
}
