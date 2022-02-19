import React, { useEffect, useState } from 'react'

function ContactForm(props) {
    const INITIAL_STATE = {
        name: '',
        phone: '',
        type: '',
        isWhatsApp: false,
    }

    const [details, setDetails] = useState(INITIAL_STATE);

    useEffect(() => {
        if (props.details) {
            setDetails({...details, ...props.details })
        }
    }, [props.details])
    
    const detailsChangeHandler = ({ currentTarget: { id , value, type, checked }}) => {
        setDetails({
            ...details,
            [id]: (type === 'checkbox') ? checked : value
        })
    }

    return (
        <div className='contact-form'>
            <form onSubmit={(event) => props.onSubmit(event, details)}>
                <div className='form-group'>
                    <label htmlFor='name' className='form-label'>Name: </label>
                    <input type='text' id='name' value={details.name} className='form-control' required onChange={detailsChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='phone' className='form-label'>Contact: </label>
                    <input type='number' id='phone' value={details.phone} className='form-control' required onChange={detailsChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='type' className='form-label'>Type: </label>
                    <select id="type" value={details.type} className='form-control' placeholder='Select...' required onChange={detailsChangeHandler}>
                        <option value="">Select</option>
                        <option value="Personal">Personal</option>
                        <option value="Office">Office</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='type' className='form-label'>Whatsapp: </label>
                    <input type="checkbox" id="isWhatsApp" checked={details.isWhatsApp} onChange={detailsChangeHandler}/>
                </div>

                <button type='submit'>{props.details ? 'Update' : 'Submit'}</button>
            </form>
        </div>
    )
}

export default ContactForm