import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/GlobalContext';
import * as Actions from '../../context/action';
const SingleEntry = React.lazy(() => import('../../components/SingleEntry/SingleEntry'));
const DeleteModal = React.lazy(() => import('../../components/DeleteModal/DeleteModal'));

const INITIAL_DELETE_MODAL_STATE = {
    idToBeDeleted: null,
    contactNameToBeDeleted: ''
}

function Homepage() {

    const [ { contactList: list }, dispatch ] = useContext(Context);

    const [modalStatus, setModalStatus] = useState(false);

    const [deleteInfo, setDeleteInfo] = useState(INITIAL_DELETE_MODAL_STATE);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const deleteHandler = (id, name) => {
        setModalStatus(prev => !prev)
        setDeleteInfo({
            idToBeDeleted: id,
            contactNameToBeDeleted: name
        })
    }

    const onCancel = () => {
        setModalStatus(prev => !prev);
        setDeleteInfo(INITIAL_DELETE_MODAL_STATE)
    }

    const onDelete = () => {
        dispatch(Actions.deleteContact(deleteInfo.idToBeDeleted))
        setModalStatus(prev => !prev);
        setDeleteInfo(INITIAL_DELETE_MODAL_STATE)
    }

    return (
        <>
            {list.length > 0 ? 
                (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Contact Type</th>
                                <th>Whatsapp</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(row => <SingleEntry row={row} key={row.id} deleteHandler={deleteHandler} />)
                            }
                        </tbody>
                    </table>
                ) :
                (
                    <div className='no-contact'>
                        <div className='no-contact-icon'>
                            <img src={require('../../images/no-contact.jpg')}/>
                        </div>
                        <p>No Contact Found!</p>
                    </div>
                )
            }

            {modalStatus && <DeleteModal deleteInfo={deleteInfo} onCancel={onCancel} onDelete={onDelete}/>}
        </>
    )
}

export default Homepage