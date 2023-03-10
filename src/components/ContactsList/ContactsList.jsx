import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';


export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  
   const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
   
   return <>
        <ul>
            {filteredContacts.map(({ id, name, number }) =>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
            />)}
        </ul>
    </>
}

