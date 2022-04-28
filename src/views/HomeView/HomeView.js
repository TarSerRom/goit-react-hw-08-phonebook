import { Title, Text, TryLink } from './HomeView.styled';

export default function HomeView() {
  return (
    <>
      <Title>Phonebook</Title>
      <Text>Save your contacts in our App</Text>
      <TryLink to="/login">Try it now!</TryLink>
    </>
  );
}