import "./Login.scss";
import LoginForm from "./LoginForm";

export default function Login(props) {
  return (
    <div className="login container">
      <p>Login to your account to publish new finds.</p>
      <LoginForm />
    </div>
  );
}
