import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';

import { ContactList } from './ContackList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts({
        contacts: JSON.parse(savedContacts),
      });
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContacts = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];

    if (contacts.some(e => e.name === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      contactsLists.push({ id, name, number });
    }
    setContacts(contactsLists);
  };

  const deleteContact = contactID => {
    setContacts(contacts.filter(contact => contact.id !== contactID));
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    // return filterContactsList;
  };
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList items={getFilteredContacts()} onDelete={deleteContact} />
    </section>
  );
};
