import { List } from '@mui/material'
import React from 'react'
import MessengerComponent from './MessengerComponent'
import { users } from '../../../mock/mockdata'
import useStore from '../../store/store'

function ContactsComponent() {
    const chatOrder = useStore((state) => state.chatOrder)
    console.log(chatOrder)
    return (
        <List>
            {chatOrder.map((userId) =>
                <MessengerComponent details={users.find(({ id }) => id == userId)} />
            )}
        </List>
    )
}

export default ContactsComponent