import "./card.style.scss";
import { useDispatch } from "react-redux";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { ContactForm } from "../contact-form/contact.component";
import { removeContact } from "../../store";

function Card({ contactValues }) {
  const dispatch = useDispatch();
  const { name, email, preview, number } = contactValues;

  const editHandler = (event) => {
    dispatch(removeContact(event.target));
  };
  return (
    <div className="card-template mar-auto">
      <div className="edit-icon" onClick={editHandler}>
        <MdOutlineModeEditOutline />
      </div>
      <label htmlFor="userImage" className="mar-auto">
        User Image
      </label>
      <img src={preview} alt="" className="img-wrap-card mar-auto" />
      <p className="mar-auto">{name}</p>
      <p className="mar-auto">{email}</p>
      <p className="mar-auto">{number}</p>
    </div>
  );
}

export default Card;
