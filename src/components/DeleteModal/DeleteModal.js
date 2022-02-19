import React from 'react'

function DeleteModal({ deleteInfo: { contactNameToBeDeleted}, onDelete, onCancel}) {
    return (
        <div className='delete-modal'>
            <div className='delete-modal-body'>
                <div className='delete-icon'>
                    <img src={require('../../images/trash-icon.png')}/>
                </div>
                <p>Are you sure you want to delete </p>
                <p><strong>{contactNameToBeDeleted}</strong> ? </p>
                <button onClick={onCancel} className='btn btn-gray'>Cancel</button>
                <button onClick={onDelete} className='btn btn-red'>Delete</button>
            </div>
        </div>
    )
}

export default DeleteModal