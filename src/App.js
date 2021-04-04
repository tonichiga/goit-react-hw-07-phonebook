import React from 'react';
import InputForm from './Components/InputForm';
import VisibleContactsHook from './Components/VisibleContactsHook';

const App = ({ value, onGetContact }) => {
  // state = {
  //   contacts: [],
  // };

  // const formSubmitHandler = data => {
  //
  //   return newContact;
  // };
  // const { contacts } = this.state;
  // if (contacts.find(contact => contact.name === newContact.name)) {
  //   return alert('такой контакт существует');
  // }

  //   this.setState(prevState => {
  //     return { contacts: [newContact, ...prevState.contacts] };
  //   });
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };
  // componentDidMount() {
  //   let getContacts = [];

  //   getContacts = JSON.parse(localStorage.getItem('Contacts'));

  //   if (getContacts === null) {
  //     getContacts = [];
  //   }

  //   this.setState({
  //     contacts: getContacts,
  //   });
  // }
  // componentDidUpdate() {
  //   localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
  // }

  // const data = this.state.contacts;
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <InputForm />
      <VisibleContactsHook />
    </div>
    //  deleteContact={this.deleteContact}
  );
};

export default App;
