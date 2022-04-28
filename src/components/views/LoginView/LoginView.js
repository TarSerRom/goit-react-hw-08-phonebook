import LoginForm from "components/LoginForm/LoginForm";
import { Title } from "./LoginView.styled";

export default function LoginView() {
    return (
      <>
        <Title>Log in to Phonebook</Title>
        <LoginForm />
      </>
    );
  }