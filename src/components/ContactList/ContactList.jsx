
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { useSelector } from 'react-redux'
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getFilteredContacts = (contacts, filter) => {
  console.log(contacts);
  if (filter.length > 0) {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
    return contacts;  
};

const ContactList = () => {
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);
    
  return (
    <div>
      <ul className={css.list}>
              {filteredContacts.map((contact) =>  (
                  <li className={css.item} key={contact.id}>
                  <Contact contact={contact} />
                  </li>
              ))}
          </ul>
      
    </div>
  )
}

export default ContactList
