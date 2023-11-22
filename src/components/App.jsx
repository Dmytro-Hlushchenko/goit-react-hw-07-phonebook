import FormInput from "./FormInput";
import ContactsList from "./ContactsList";
import Filter from "./Filter";

export const App = () => {
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