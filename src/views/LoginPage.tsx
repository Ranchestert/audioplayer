import "../styles/LoginPage.css";
import { handleLoginForm } from "../controllers/login";
import { FormEvent } from "react";

const loginForm = () => {
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    handleLoginForm(e);
  }
  return (
    <form
      name="loginForm"
      id="loginForm"
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="form-field">
        <label htmlFor="login" className="form-field__label">
          Enter your username:
        </label>
        <input type="text" name="login" className="form-field__input" />
      </div>
      <div className="form-field">
        <label htmlFor="password" className="form-field__label">
          Enter your username:
        </label>
        <input type="password" name="password" className="form-field__input" />
      </div>
      <p className="form-error" id="error-msg">
        Username or password is incorrect
      </p>
      <a href="/signup/" className="to-reg">
        Try singing up.
      </a>
      <button type="submit" className="form-submit">
        Log in
      </button>
    </form>
  );
};
