import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from 'redux/operations';

const contactsInitialState = {
    contacts: [],
    isLoading: false,
    error: null, 
}; 

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
 
    extraReducers: builder =>
        builder
            .addCase(fetchContactsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
                state.error = null;
            })
            .addCase(fetchContactsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContactThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts.push(action.payload);
                state.error = null;
            })
            .addCase(addContactThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteContactThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id);
                state.error = null;
            })
            .addCase(deleteContactThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
});

export const contactsReducer = contactSlice.reducer;

