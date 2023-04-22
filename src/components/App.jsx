import Notiflix from 'notiflix';
import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { ContactForm } from './Contacts/ContactsForm';
import { FilterContacts } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  onSearchContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (id, name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    Notiflix.Notify.info(`Succesfully removed ${name} from your contacts`);
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const savedContactsParsed = JSON.parse(savedContacts);

    if (savedContactsParsed) {
      this.setState({ contacts: savedContactsParsed });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated phonebook');

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <div className={css.container}>
          <Title title="Phone book" />
          <ContactForm
            onFormSubmit={this.onFormSubmit}
            contacts={this.state.contacts}
          />
          <Title title="Search contacts" />
          <FilterContacts
            filter={this.state.filter}
            onSearchContact={this.onSearchContact}
          />
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
            filter={this.state.filter}
          />
        </div>
      </>
    );
  }
}
