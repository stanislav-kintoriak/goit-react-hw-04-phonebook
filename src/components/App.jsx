import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const generatedId = nanoid();

    const contactsFromState = contacts;

    const contact = { id: generatedId, name, number };

    if (contactsFromState.find(stateContact => stateContact.name === name)) {
      alert(`${name} is already in contacts list`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const filterChangeHandler = e => {
    setFilter(e.currentTarget.value);
  };

  const getSearchContacts = () => {
    const filterInLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterInLowerCase)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const foundContacts = getSearchContacts();

  return (
    <div className={css.divSection}>
      <h1 className={css.section__title}>Phonebook</h1>
      <ContactForm onFormSubmit={formSubmitHandler} />
      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter filterValue={filter} filterChange={filterChangeHandler} />
      <ContactList renderList={foundContacts} onDeleteContact={deleteContact} />
    </div>
  );
};
