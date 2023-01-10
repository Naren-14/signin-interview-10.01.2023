import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUpload } from "react-icons/fa";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  getContactUserName,
  getContactEmail,
  getContactImage,
  getContactPreview,
  getContactPhoneNumber,
  addContact,
} from "../../store";
import "./contact-form.scss";

function ContactForm({ currentPage }) {
  const dispatch = useDispatch();

  const { userName, email, image, preview, phoneNumber } = useSelector(
    (state) => {
      console.log(state.contactForm.formValue);
      return {
        userName: state.contactForm.formValue.userName,
        email: state.contactForm.formValue.email,
        image: state.contactForm.formValue.image,
        preview: state.contactForm.formValue.preview,
        phoneNumber: state.contactForm.formValue.phoneNumber,
      };
    }
  );

  console.log(userName, email, image, preview, phoneNumber);

  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addContact({ userName, email, image, preview, phoneNumber }));
    currentPage("contactlist");
  };

  const handleImageChange = (event) => {
    const [file] = event.target.files;
    dispatch(getContactImage(file));
  };

  const handleUserNameChange = (event) =>
    dispatch(getContactUserName(event.target.value));
  const handleEmailChange = (event) =>
    dispatch(getContactEmail(event.target.value));
  const handlePhoneNumberChange = (event) =>
    dispatch(getContactPhoneNumber(event.target.value));

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        dispatch(getContactPreview(e.target.result));
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  let showContent = (
    <p
      className="image-preview-icon"
      onClick={() => imageUploader.current.click()}
    >
      <FaUpload />
    </p>
  );

  if (preview) {
    showContent = <img alt="" src={preview} ref={uploadedImage} />;
  }

  return (
    <div className="card center-items col-dir">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          ref={imageUploader}
        />
        <div className="img-wrap center-items mar-aut custom-file-upload">
          {showContent}
        </div>
        <FormInput
          label="User Name"
          type="text"
          required
          onChange={handleUserNameChange}
          name="userName"
          value={userName}
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
          label="Phone Number"
          type="number"
          required
          onChange={handlePhoneNumberChange}
          name="phoneNumber"
          value={phoneNumber}
        />
        <div className="button-container-contact-form">
          <Button type="submit">ADD</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
