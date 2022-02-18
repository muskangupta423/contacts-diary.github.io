import * as Constant from '../Constant';

export const reducerFunc = (state, action) => {
    switch(action.type) {
        case Constant.ADD_CONTACT:
            return {...state, contactList: [...state.contactList, {...action.payload}] }
        case Constant.EDIT_CONTACT:
            return {...state, contactList: state.contactList.map(item => item.id === action.id ? {...action.details} : item)}
        case Constant.DELETE_CONTACT: 
            return {...state, contactList: state.contactList.filter(({ id }) => id !== action.id)}
        default: 
            return state;
    }
}