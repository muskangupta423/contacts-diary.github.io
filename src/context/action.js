import * as Contact from '../Constant';

export const deleteContact = (id) => {
    return {
        type: Contact.DELETE_CONTACT,
        id
    }
}

export const editContact = (id, details) => {
    return {
        type: Contact.EDIT_CONTACT,
        id,
        details
    }
}

export const addContact = (payload) => {
    return {
        type: Contact.ADD_CONTACT,
        payload
    }
}