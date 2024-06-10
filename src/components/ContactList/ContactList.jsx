import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

import css from "./ContactList.module.css";
import ContactItem from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) => {
    if ("id" in contact && "name" in contact && "number" in contact) {
      if (
        typeof contact.id === "string" &&
        typeof contact.name === "string" &&
        typeof contact.number === "string"
      ) {
        return contact.name.toLowerCase().includes(filters.toLowerCase());
      }
    }
    return false;
  });
  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
