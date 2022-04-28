import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
    'phonebook/fetchContacts',
    async () => {
      try {
        const { data } = await axios.get('/contacts');
        return data;
      } catch (error) {
        //   error
      }
    }
  );
  
  export const postContacts = createAsyncThunk(
    'phonebook/postContacts',
    async contact => {
      try {
        const { data } = await axios.post('/contacts', contact);
        return data;
      } catch (error) {
        //   error
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async contactId => {
      try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
      } catch (error) {
        // error
      }
    }
  );