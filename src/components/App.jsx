import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  addContact = (newContact) => {
    if (this.state.contacts.map(contact => contact.name.toLowerCase()).includes(newContact.name.toLowerCase())) {
      alert('error');
    }
    else {this.setState(prevState => ({contacts: [newContact, ...prevState.contacts]}))}
    
  } 

  setFilter = (filterValue) => {
    this.setState({filter: filterValue})
  }

  handleDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
    console.log(id)
  }

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    )

    return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
      <h1>Phonebook</h1>
      <ContactForm onSubmit = {this.addContact}/>

      <h2>Contacts</h2>
        <Filter onFilter={this.setFilter} />
        <Contacts visibleContacts = {visibleContacts} handleDelete= {this.handleDelete}></Contacts>

    </div>
  );
  }
}
