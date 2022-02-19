import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const EditContact = React.lazy(() => import('../EditContact/EditContact'));
const Homepage = React.lazy(() => import('../Homepage/Homepage'));
const Header = React.lazy(() => import('../Header/Header'));
const AddContact = React.lazy(() => import('../AddContact/AddContact'));

function RouteContainer() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Header/>
            <Routes>
                <Route path='/allContacts' element={<Homepage/>} />
                <Route path='/addContact' element={<AddContact/>} />
                <Route path='/editContact/:id' element={<EditContact/>} />
            </Routes>
            
        </Suspense>
    )
}

export default RouteContainer