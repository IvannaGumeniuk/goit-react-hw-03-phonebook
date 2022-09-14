import React, { Component } from "react";
import styles from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  };

  onSubmit = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  
  checkNewContact = newContact => {
    if (
      this.state.contacts.find(contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
      )
    )
  { alert(newContact.name + ' is alredy in contacts');
      return true;
    }
      return false;
  };
  
  onChangeFilter = async e => {
    await this.setState({ filter: e.target.value });
  };
  
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
      }));
  };
  
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  
  componentDidMount() { 
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    }
    
  componentDidUpdate(prevProps, prevState) { 
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    const visibleName = contacts.filter(contact => 
      contact.name.toLocaleLowerCase().includes(normalizeFilter),
    );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmit}
        checkNewContact={this.checkNewContact} />
      
      <h2>Contacts</h2>

        <Filter
          filter={this.state.filter}
          onChange={this.onChangeFilter}
        />
      
        <ContactList
          visibleName={visibleName}
          deleteContact={this.deleteContact}
        />    
    </div>
  );
}
}

export default App;