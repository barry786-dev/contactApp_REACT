import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const local_storage_key = 'contacts';
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(local_storage_key)) || [];
  });
  const setContactsData = (contact) => {
    const contactsData = [...contacts, contact];
    setContacts(contactsData);
  };

  const deleteContact = (id) => {
    const contactData = [...contacts];
    const newContactsData = contactData.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactsData);
  };

  /* useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(local_storage_key)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []); */

  useEffect(() => {
    localStorage.setItem(local_storage_key, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className='ui container'>
      <Header />
      <AddContact setContactDataFunc={setContactsData} />
      <ContactList contacts={contacts} deleteContactFunc={deleteContact} />
    </div>
  );
}

export default App;
