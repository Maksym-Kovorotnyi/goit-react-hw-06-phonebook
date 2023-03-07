import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import css from './Filter.module.css'

export const Filter = () => {
    const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
    <>
        <label className={css.label} htmlFor="text">Find contact by name</label>
        <input
            className={css.input}
            onChange={event => dispatch(filterContacts(event.target.value))}
            type="text"
            value={filter}
        
        />
    
    </>
}

