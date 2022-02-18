import React from 'react'

function DeleteModal({ deleteInfo: { contactNameToBeDeleted}, onDelete, onCancel}) {
    return (
        <div className='deleteModal'>
            <div className='deleteModalBody'>
                <p>Are you sure you want to delete <strong>{contactNameToBeDeleted}</strong> ? </p>
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onDelete}>Yes</button>
            </div>
        </div>
    )
}

export default DeleteModal