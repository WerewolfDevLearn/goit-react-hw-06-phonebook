// import { nanoid } from 'nanoid';
import actionsTypes from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(actionsTypes.ADDCONTACT);
export const removeContact = createAction(actionsTypes.REMOVECONTACT);
export const filterContacts = createAction(actionsTypes.CONTACTFILTER);

// export const addContact = (name: string, number: string) => ({
//   type: actionsTypes.ADDCONTACT,
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// });

// export const removeContact = (id: string) => ({
//   type: actionsTypes.REMOVECONTACT,
//   payload: id,
// });

// export const filterContacts = (name: string) => ({
//   type: actionsTypes.CONTACTFILTER,
//   payload: `${name}`,
// });
