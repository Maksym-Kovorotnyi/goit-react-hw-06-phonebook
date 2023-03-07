import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css'

export const ContactItem = ({ id, name, number, }) => {
    const dispatch = useDispatch();
    
    <>
        <li className={css.item} key={id}>
            <p className={css.text}>{name}: {number}</p>
            <button className={css.btn} type="button" onClick={()=>dispatch.deleteContacts(id)}>Delete</button>
        </li>
    </>
}

