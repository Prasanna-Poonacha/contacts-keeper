import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Prasanna Poonacha",
        email: "Prasanna.Poonacha@gmail.com",
        phone: "9008825886",
        type: "personal",
      },
      {
        id: 2,
        name: "Chaithra Poonacha",
        email: "Chaithra.Poonacha@gmail.com",
        phone: "9916808666",
        type: "personal",
      },
      {
        id: 3,
        name: "Neel Subbaiah",
        email: "Neel.Subbaiah@gmail.com",
        phone: "0123456789",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete contact

  //Set current contact

  //Clear current contact

  //Update contact

  //Filter contacts

  //Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
