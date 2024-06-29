import Contact from "../contact/contact";

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector((state) => selectContacts(state));
  const filterName = useSelector((state) => selectNameFilter(state));

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const dispatch = useDispatch();

  function delContact(id) {
    dispatch(deleteContact(id));
  }

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            delContact={delContact}
          />
        );
      })}
    </ul>
  );
}
