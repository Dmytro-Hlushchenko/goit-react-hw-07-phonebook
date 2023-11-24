import { getContacts, getError, getFilter, getLoading } from "redux/selectors";
import { List, Item, DeleteBtn } from "./ContactList.styled"
import { useSelector, useDispatch } from "react-redux";
import { deleteContactThunk } from "redux/operations";


export default function ContactsList () {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);
    const dispatch = useDispatch();


    const filteredContacts = () => {
        const lowerCaseFilter = filter.toLocaleLowerCase();
        return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter));
    };
    
return(
    <div>
        <List>
            {isLoading && !error && <b>  Loading...</b>}
            {error && <p>{error.message}</p>}
            {filteredContacts().map(item => (
                <Item key={item.id}>
                        <p>{item.name} {item.number} </p>
                        <DeleteBtn 
                        onClick={() => dispatch(deleteContactThunk(item.id))}
                        >Delete
                        </DeleteBtn>
                </Item>
            ))}
        </List>
    </div>
    )
};