import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Form, Wrapper, Input, SubmitButton } from './RegisterForm.styled';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Your name"
          aria-label="Input for your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
        />
      </Wrapper>
      <Wrapper>
        <span>Email</span>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your e-mail"
          aria-label="Input for your email"
          required
        />
      </Wrapper>
      <Wrapper>
        <span>Password</span>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Should be at least 7 characters"
          aria-label="Input for your password"
          required
        />
      </Wrapper>
      <SubmitButton type="submit">Log in</SubmitButton>
    </Form>
  );
}