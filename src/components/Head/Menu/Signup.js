import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { DialogTitle, DialogContent, DialogActions, DialogContentText, TextField, Button} from '@material-ui/core'
import { PersonOutlined, LockOutlined, MailOutlined, Event,  } from "@material-ui/icons";
import {createUser } from '../../../actions/user'

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            fullName: "",
            email: "",
            password: "",
        }
    }

    handleForm = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }


render() {
return (
<Fragment>
    <DialogTitle align='center'>Signup</DialogTitle>
    <DialogContent align='center'>
    <DialogContentText>Create an account</DialogContentText>
    <TextField onChange={(event) => this.handleForm(event)} name="fullName" label="Full Name" autoFocus InputProps={{endAdornment: <PersonOutlined />}} value={this.state.fullName}/> <br/>
    <TextField name="email" label="Email" autoFocus InputProps={{endAdornment: <MailOutlined />}} onChange={(event) => this.handleForm(event)} value={this.state.email} /> <br/>
    <TextField type="password" name="password" label="Password" autoFocus InputProps={{endAdornment: <LockOutlined />}} onChange={(event) => this.handleForm(event)} value={this.state.password}/>
    </DialogContent>
    <DialogActions>
    <Button onClick={() => this.props.createUser(this.state)}>Create An Account</Button>
    <Button onClick= {() => this.props.handleClose()}>Cancel</Button>
    </DialogActions>
</Fragment>
)}}

export default connect(null, { createUser })(Signup)