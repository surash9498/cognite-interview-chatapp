import SendIcon from '@mui/icons-material/Send';
import { AppBar, Avatar, Box, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Toolbar, Typography } from '@mui/material';
import { React, useEffect, useRef, useState } from 'react';
import useStore from '../../store/store';
import "./MessengerComponent.css";
import { users } from '../../../mock/mockdata';
import { profilePic } from '../../utils';
function MessageComponent() {
    const id = useStore((state) => state.selectedId)
    const addMessage = useStore((state) => state.updateMessage)
    const message = useStore((state) => state.messages)
    const [currentUser, setCurrentUser] = useState(users[0])
    const setChatOrder = useStore((state) => state.setChatOrder)
    const chatOrder = useStore((state) => state.chatOrder)
    const ref = useRef("")
    const handleSendMessage = () => {
        ref.current && addMessage(id, { msg: ref.current.value, time: new Date().toISOString().split("T")[0] })
        ref.current.value = ""
        if (chatOrder[0] !== id) {
            setChatOrder(id)
            console.log(chatOrder)
        }
    }

    useEffect(() => {
        if (id && currentUser.id != id) {
            const user = users.filter(({ id: userId }) => userId == id)
            setCurrentUser(...user)
        }

    }, [id])
    return (
        <Box className="chatBoxMain">
            <AppBar position="static" style={{ backgroundColor: "rgb(84, 206, 84)" }}>
                <Toolbar>
                    <Avatar sx={{ mr: 2 }} src={profilePic(currentUser)} />
                    <Typography >{currentUser.name}</Typography>
                </Toolbar>
            </AppBar>
            <Box className="chatBox">
                <List>
                    {message[id]?.map((message, index) => (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar sx={{ mr: 2 }} src={profilePic({ gender: "M" })}></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={message.msg}
                                secondary={message.time}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Grid className="inputBox">
                <TextField
                    fullWidth
                    variant="outlined"
                    inputRef={ref}
                    placeholder="Type a message..."
                    sx={{ marginRight: 1 }}
                    onKeyDown={({ key }) => (key == "Enter") && handleSendMessage()}
                />
                <IconButton onClick={handleSendMessage} color="primary">
                    <SendIcon />
                </IconButton>
            </Grid>
        </Box>
    )
}

export default MessageComponent