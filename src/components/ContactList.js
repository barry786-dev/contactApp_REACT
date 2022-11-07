import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const contacts = props.contacts;
  const contactUl = contacts.map((contact) => {
    return (
      <div key={contact.id} className='item'>
        <ContactCard
          contact={contact}
          deleteContactFunc={props.deleteContactFunc}
        />
      </div>
    );
  });
  return <div className='ui celled list'>{contactUl}</div>;
};

export default ContactList;
