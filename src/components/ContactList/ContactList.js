import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from "redux/phonebook";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const phonebook = useSelector(phonebookSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(phonebookOperations.getContacts()), [dispatch]);

  return (
    <ul>
      {phonebook.map(contact => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
          deleteContact={() =>
            dispatch(phonebookOperations.deleteContact(contact.id))
          }
        />
      ))}
    </ul>
  );
};
export default ContactList;