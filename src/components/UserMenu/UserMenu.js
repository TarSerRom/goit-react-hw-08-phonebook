import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Wrapper, Text, Button, Thumb, Avatar } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <Wrapper>
      <Thumb>
        <Avatar
          src={`https://eu.ui-avatars.com/api/?background=2196f3&color=fff&length=1&name=$%7Bname%7D`}
          alt="avatar"
          title="Your avatar"
        />
      </Thumb>
      <Text>Welcome, {name}</Text>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </Button>
    </Wrapper>
  );
}