import React from 'react'
import { useNavigate } from 'react-router-dom';
import tick  from '../../images/tick-green.svg';
import cross from '../../images/cross.svg';
import ReactTooltip from 'react-tooltip';

function SingleEntry({ row, deleteHandler }) {

    let { name, imageUrl, phone, type, isWhatsApp, id } = row;
    let navigate = useNavigate();
    return (
        <tr>
            <td>{ name }</td>
            <td>{ phone }</td>
            <td>{ type }</td>
            <td>{ isWhatsApp ? <img src={tick} alt='this number is linked to Whatsapp'/> : <img src={cross} alt='this number is not linked to Whatsapp'/> }</td>
            <td>
                <button data-for='edit' data-tip='Edit' onClick={() => navigate(`/editContact/${id}`)}>
                    Edit
                </button>
                <button data-tip='Delete' data-for='delete' onClick={() => deleteHandler(id, name)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default SingleEntry