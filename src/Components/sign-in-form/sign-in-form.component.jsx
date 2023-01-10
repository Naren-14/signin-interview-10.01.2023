import { useDispatch, useSelector } from "react-redux";

import {
  getSignInData,
  getEmail,
  getPassword,
  clearSignInData,
} from "../../store";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

function SignInForm({ currentPage }) {
  const dispatch = useDispatch();

  const { email, password } = useSelector((state) => {
    return {
      email: state.signInForm.signInValue.email,
      password: state.signInForm.signInValue.password,
    };
  });

  const handleEmailChange = (event) => {
    dispatch(getEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(getPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSignInData({ email, password }));

    dispatch(clearSignInData({ email, password }));
    // currentPage("contactform");
  };

  const handleSignUp = () => {
    currentPage("signup");
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleEmailChange}
          required
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handlePasswordChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
        </div>
      </form>

      <div className="signup-button-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <div className="buttons-container">
          <Button onClick={handleSignUp}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
