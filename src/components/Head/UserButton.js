import React from 'react'
import { Tooltip, Button} from '@material-ui/core'
 

const UserButton = () => {
 return (
  <Tooltip title="Login or Signup">
   <Button variant="contained" size="small" id="user-button">
       Login
   </Button>
  </Tooltip>
 )
}

export default UserButton
// Delete this
