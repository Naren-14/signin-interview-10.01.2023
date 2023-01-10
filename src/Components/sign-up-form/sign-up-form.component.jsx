import { useDispatch, useSelector } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  getSignUpFormData,
  clearSignUpFormData,
  getUserName,
  getSignUpEmail,
  getSignUpPassword,
  getConfirmPassword,
} from "../../store";
import "./sign-up-form.styles.scss";

function SignUpForm({ currentPage }) {
  const dispatch = useDispatch();

  const { displayName, email, password, confirmPassword } = useSelector(
    (state) => {
      return {
        displayName: state.signUpForm.formValue.displayName,
        email: state.signUpForm.formValue.email,
        password: state.signUpForm.formValue.password,
        confirmPassword: state.signUpForm.formValue.confirmPassword,
      };
    }
  );

  const handleNameChange = (event) => {
    dispatch(getUserName(event.target.value));
  };
  const handleEmailChange = (event) => {
    dispatch(getSignUpEmail(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(getSignUpPassword(event.target.value));
  };
  const handleConfirmPasswordChange = (event) => {
    dispatch(getConfirmPassword(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    dispatch(
      getSignUpFormData({ displayName, email, password, confirmPassword })
    );
    console.log(displayName, email, password, confirmPassword);
    dispatch(clearSignUpFormData());

    currentPage("signin");
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleNameChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleEmailChange}
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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleConfirmPasswordChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <div className="buttons-container">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
