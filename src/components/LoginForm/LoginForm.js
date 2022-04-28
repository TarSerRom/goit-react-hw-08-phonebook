import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Form, Wrapper, Input, SubmitButton } from './LoginForm.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
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
          placeholder="Your password"
          aria-label="Input for your password"
          required
        />
      </Wrapper>
      <SubmitButton type="submit">Log in</SubmitButton>
    </Form>
  );
}