import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { phonebookOperations, phonebookSelectors } from "redux/phonebook";
import { Form, Wrapper, Input, SubmitButton } from './ContactForm.styled';

export default function ContactForm() {
  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const phonebook = useSelector(phonebookSelectors.getContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedFilter = name.toLowerCase();

    const checkForDuplicateName = phonebook.find(
      contact => contact.name.toLowerCase() === normalizedFilter
    );

    if (!checkForDuplicateName) {
      const contact = { name, number };

      dispatch(phonebookOperations.postContacts(contact));

      setName('');
      setNumber('');
      return;
    }

    toast.error(`${name} is already in contacts`, {
      position: 'top-right',
      theme: 'colored',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Wrapper htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Contact name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            id={nameInputId}
            onChange={handleChange}
          />
        </Wrapper>
        <Wrapper htmlFor={phoneInputId}>
          Phonebook
          <Input
            type="tel"
            name="phone"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            id={phoneInputId}
            onChange={handleChange}
          />
        </Wrapper>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </>
  );
}