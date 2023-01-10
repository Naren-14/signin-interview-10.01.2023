import { useSelector } from "react-redux";

import "./contact-list.scss";
import Card from "../card/card.component";
import Button from "../button/button.component";

function ContactList({ currentPage }) {
  const contacts = useSelector((state) => {
    return state.contacts.data;
  });

  const handleContactClick = () => currentPage("contactform");

  const handleSignOutClick = () => currentPage("signin");

  return (
    <div>
      <div className="contact-container">
        {contacts.map((contact, index) => {
          return <Card key={index} contactValues={contact}></Card>;
        })}
      </div>
      <div className="buttons-container margin-1_5">
        <Button onClick={handleContactClick} type="submit">
          Add Contact
        </Button>
      </div>
      <div className="buttons-container margin-2">
        <Button onClick={handleSignOutClick} type="submit">
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default ContactList;
