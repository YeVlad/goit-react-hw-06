import Contact from "../contact/contact";

export default function ContactList({ contacts, delContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
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
