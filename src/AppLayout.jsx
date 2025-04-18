import { Grid } from '@mui/material'
import React from 'react'
import "./AppLayout.css"
function AppLayout(props) {
    return (
        <Grid container>
            <Grid size={3} className="messgengerLayout">
                {props.children[0]}
            </Grid>
            <Grid size={9} className="messageLayout">
                {props.children[1]}
            </Grid>
        </Grid>
    )
}

export default AppLayout