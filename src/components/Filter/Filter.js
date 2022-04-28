import { Wrapper, Input, Text } from './Filter.styled';
import { useDispatch } from 'react-redux';
import phonebookActions from 'redux/phonebook/phonebook-actions';

export default function Filter() {
    const dispatch = useDispatch();
  
    return (
      <Wrapper>
        <Text>Find contacts by name</Text>
        <Input
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={e => dispatch(phonebookActions.changeFilter(e.target.value))}
        />
      </Wrapper>
    );
  }