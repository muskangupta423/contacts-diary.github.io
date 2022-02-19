import React, { useContext } from 'react'
import { Context } from '../../context/GlobalContext';
import { v1 as uuidv1 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import { useNavigate } from 'react-router-dom';
import * as Actions from '../../context/action';

function AddContact() {

    const [, dispatch] = useContext(Context);
    let navigate = useNavigate();

    const submitDetailsHandler = (event, details) => {
        event.preventDefault();
        let payload = {
            id: uuidv1(),
            ...details
        }
        dispatch(Actions.addContact(payload));
        navigate('/allContacts')
    }   

    return ( 
        <div className='formContainer'>
            <ContactForm onSubmit={submitDetailsHandler}/> 
        </div>
    )
}

export default AddContact