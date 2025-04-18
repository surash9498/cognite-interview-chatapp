import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import useStore from '../../store/store'
import { profilePic } from '../../utils'
import "./MesssengerComponent.css"


function MessengerComponent({ details }) {
    const setId = useStore((state) => state.setSelectedId)
    const lastMessage = useStore((state) => state.messages)

    const onContactSelect = ({ currentTarget: target }) => {
        setId(target.id)
    }
    return <>
        <ListItem alignItems="flex-start" button className="contact" key={details.id} id={details.id} onClick={onContactSelect}>
            <ListItemAvatar>
                {/* {console.log(lastMessage[details.id])} */}
                <Avatar alt="" src={profilePic(details)} />
            </ListItemAvatar>
            <ListItemText className='contactName'
                primary={details.name}
                secondary={lastMessage?.[details.id]?.[lastMessage[details.id].length - 1].msg}
            />
        </ListItem>
        <Divider variant="inset" component="li" />
    </>

}

// { name: "Sara", id: "1", lastSeen: "", gender: "F" },

export default MessengerComponent