import "./App.css";

import ContactForm from "../contactForm/contactForm";
import SearchBox from "../searchBox/searchBox";
import ContactList from "../contactList/contactList";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
