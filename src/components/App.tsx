// import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { RootState } from '../redux/store';
import { IContact } from '../types';
import AppStl from './App.module.css';

export default function App() {
  const filter = useSelector((state: RootState) => state.filter);
  console.log('filter: ', filter);
  const contacts = useSelector((state: RootState) => state.contacts);
  console.log('contacts: ', contacts);

  const getVisibleContacts = (contacts: IContact[]) => {
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };
  const visibleContacts = getVisibleContacts(contacts);
  return (
    <div className={AppStl.container}>
      <h2 className={AppStl.heading}>PhoneBook</h2>

      <ContactForm />

      <h2 className={AppStl.heading}>Contacts</h2>

      {contacts.length > 1 && <Filter />}

      {contacts.length > 0 && <ContactsList visibleContacts={visibleContacts} />}
    </div>
  );
}
