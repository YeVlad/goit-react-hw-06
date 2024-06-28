import "./App.css";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../../redux/contactsSlice";

import ContactForm from "../contactForm/contactForm";
import SearchBox from "../searchBox/searchBox";
import ContactList from "../contactList/contactList";

import { selectContacts } from "../../redux/contactsSlice";

function App() {
  const dateContacts = useSelector((state) => selectContacts(state));
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const filterContacts = dateContacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddContact({ id, name, number }) {
    dispatch(addContact({ id, name, number }));
  }

  function delContact(id) {
    dispatch(deleteContact(id));
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filterContacts} delContact={delContact} />
    </>
  );
}

export default App;
