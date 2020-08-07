import React, { Component, Fragment } from 'react'
import { Grid, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField, Button} from '@material-ui/core'
import { PersonOutlined, LockOutlined, MailOutlined,  } from "@material-ui/icons";

export default class Signup extends Component {
render() {
return (
<Fragment>
    <DialogTitle>Signup</DialogTitle>
    <DialogContent>
    <DialogContentText>Create an account</DialogContentText>
    <TextField label="Full Name" autoFocus InputProps={{endAdornment: <PersonOutlined />}}/> <br/>
    <TextField label="Email" autoFocus InputProps={{endAdornment: <MailOutlined />}}/> <br/>
    <TextField label="Password" autoFocus InputProps={{endAdornment: <LockOutlined />}} />
    </DialogContent>
    <DialogActions>
    <Button>Create An Account</Button>
    <Button onClick= {() => this.props.handleClose()}>Cancel</Button>
    </DialogActions>
</Fragment>
)}}
