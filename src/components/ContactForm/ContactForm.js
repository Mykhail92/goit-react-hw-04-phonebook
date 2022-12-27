import { useState } from 'react';

import { Button, Form, Label } from './ContavtForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };
  const handleChangeNumber = e => {
    const { value } = e.target;

    setNumber(value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name: name, number: number });

    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <input
        placeholder="Enter your name"
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label>Number </Label>
      <input
        placeholder="Enter your number"
        type="tel"
        name="number"
        value={number}
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button>add Contact</Button>
    </Form>
  );
};
