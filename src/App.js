import SignInForm from "./Components/sign-in-form/sign-in-form.component";
import SignUpForm from "./Components/sign-up-form/sign-up-form.component";
import ContactForm from "./Components/contact-form/contact.component";
import ContactList from "./Components/contact-list/contact-list.componet";
import { useState } from "react";

function App() {
  const [currentForm, setCurrentForm] = useState("contactlist");
  const currentFormHandler = (name) => {
    setCurrentForm(name);
  };

  let currentComponent = "";

  (() => {
    switch (currentForm) {
      case "signin":
        currentComponent = <SignInForm currentPage={currentFormHandler} />;
        break;
      case "signup":
        currentComponent = <SignUpForm currentPage={currentFormHandler} />;
        break;
      case "contactform":
        currentComponent = <ContactForm currentPage={currentFormHandler} />;
        break;
      case "contactlist":
        currentComponent = <ContactList currentPage={currentFormHandler} />;
        break;
      default:
        return null;
    }
  })();
  return <div className="App">{currentComponent}</div>;
}

export default App;
