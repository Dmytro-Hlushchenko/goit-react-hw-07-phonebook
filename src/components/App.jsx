import FormInput from "./FormInput";
import ContactsList from "./ContactsList";
import Filter from "./Filter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContactsThunk } from "redux/operations";


export const App = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            <FormInput />
            <h2>Contacts</h2>
            <Filter />
            <ContactsList />
        </div>
    );
};
