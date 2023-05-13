import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactsList/ContactsList'

import css from './App.module.css'


export class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
}


  formSubmitHandler = ({ name, number }) => {
    const generatedId = nanoid();

    const contactsFromState = this.state.contacts;

    const contact = { id: generatedId, name, number };

    if (contactsFromState.find(stateContact => stateContact.name === name)) {
      alert(`${name} is already in contacts list`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  }


  filterChangeHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getSearchContacts = () => {
    const { contacts, filter } = this.state;

    const filterInLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterInLowerCase)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };



render () {
  const { filter } = this.state;

  const foundContacts = this.getSearchContacts();

  return (<div className={css.divSection}>
        <h1 className={css.section__title}>Phonebook</h1>
        <ContactForm onFormSubmit={this.formSubmitHandler} />
        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter filterValue={filter} filterChange={this.filterChangeHandler} />
        <ContactList
          renderList={foundContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
  );
}
}