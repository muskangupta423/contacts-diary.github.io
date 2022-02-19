import React from 'react'
import { useNavigate } from 'react-router-dom';
import avatar from '../../images/avatar.png';
import tick  from '../../images/tick-green.png';
import cross from '../../images/cross.png';

function SingleEntry({ row, deleteHandler }) {

    let { name, imageUrl, phone, type, isWhatsApp, id } = row;
    let navigate = useNavigate();
    return (
        <tr>
            <td className='avatar-name'> <img src={avatar} className='avatar-icon'/> { name }</td>
            <td>{ phone }</td>
            <td>{ type }</td>
            <td>{ isWhatsApp ? <img src={tick} alt='This number is linked to Whatsapp'/> : <img src={cross} alt='This number is not linked to Whatsapp'/> }</td>
            <td>
                <button onClick={() => navigate(`/editContact/${id}`)} className='btn btn-gray'>Edit</button>
                <button onClick={() => deleteHandler(id, name)} className='btn btn-red'>Delete</button>
            </td>
        </tr>
    )
}

export default SingleEntry