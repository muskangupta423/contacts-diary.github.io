import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/GlobalContext';
import ContactForm from '../ContactForm/ContactForm'
import * as Actions from '../../context/action';

function EditContact() {
    const { id: contactId } = useParams();
    const [ { contactList }, dispatch ] = useContext(Context);
    const [details, setDetails] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        if (contactId) {
            let requiredDetails = contactList.find(({ id }) => id === contactId);
            setDetails(requiredDetails)
        }
    }, []);

    const submitDetailsHandler = (event, details) => {
        event.preventDefault();
        dispatch(Actions.editContact(contactId, details))
        navigate('/')
    }

    return (
        <ContactForm onSubmit={submitDetailsHandler} details={{ ...details }}/>
    )
}

export default EditContact