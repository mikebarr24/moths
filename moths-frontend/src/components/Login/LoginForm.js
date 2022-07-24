import "./LoginForm.scss";

export default function LoginForm(props) {
  return (
    <div className="login-form">
      <form className="login-form">
        <input type="text" placeholder="Username" className="text-field" />
        <input type="password" placeholder="Password" className="text-field" />
        <button>Login</button>
        <button type="button">Sign Up</button>
      </form>
    </div>
  );
}
