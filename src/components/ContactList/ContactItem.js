import { Item, Text, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

export default ContactItem;