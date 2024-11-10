import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector((state) => state.contacts.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}
