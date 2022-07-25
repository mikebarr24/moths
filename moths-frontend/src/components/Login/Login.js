import "./Login.scss";
import LoginForm from "./LoginForm";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../error/ErrorFallback";

export default function Login(props) {
  return (
    <div className="login container">
      <ErrorBoundary fallback={<ErrorFallback />}>
        <LoginForm className="login-form" />
      </ErrorBoundary>
    </div>
  );
}
