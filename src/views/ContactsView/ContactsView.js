import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import { Title } from "./ContactsView.styled";

export default function ContactsView() {
  return (
    <>
      <Title>Contacts</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}