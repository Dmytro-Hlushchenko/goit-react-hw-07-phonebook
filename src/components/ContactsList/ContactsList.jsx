import { getContacts, getFilter } from "redux/selectors";
import { List, Item, DeleteBtn } from "./ContactList.styled"
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/phonebookSlice";


export default function ContactsList () {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    const filteredContacts = () => {
        const lowerCaseFilter = filter.toLocaleLowerCase();
        return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter));
    };
    
return(
    <div>
        <List>
            {filteredContacts().map(item => (
                <Item key={item.id}>
                        <p>{item.name} {item.number} </p>
                        <DeleteBtn 
                        onClick={() => dispatch(deleteContact(item.id))}
                        >Delete
                        </DeleteBtn>
                </Item>
            ))}
        </List>
    </div>
    )
};