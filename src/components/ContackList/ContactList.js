import { ButtonList } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item, id) => (
        <li key={id}>
          {item.name}: {item.number}
          <ButtonList onClick={() => onDelete(item.id)}>Delete</ButtonList>
        </li>
      ))}
    </ul>
  );
};
