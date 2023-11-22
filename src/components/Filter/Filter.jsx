import { useDispatch } from "react-redux";
import { filterContacts } from "redux/filterSlice";


export default function Filter () {
    const dispatch = useDispatch();
   
   const onInputFilterName = value => {
        const newFilter = value;
        dispatch(filterContacts(newFilter))
    };

    return (
        <div>
                <label>Find contacts by name: 
                <input type="text" 
                onChange={evt => onInputFilterName(evt.target.value)}/>
                </label>
        </div>
    )
}