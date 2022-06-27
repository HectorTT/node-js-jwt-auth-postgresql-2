import {Button,Box, AppBar,Container, Typography,Toolbar} from '@mui/material'
import {Link,useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";


export default function Navbar() {
    const navigate = useNavigate()
/*     const [login, setLogin] = useState(false);

    if(localStorage.getItem('token')){
        setLogin(true);
    }
 */
  return (
    <>
    <Box sx={{flexGrow:1}}>
        <AppBar position="static" color="transparent">
            <Container>
                <Toolbar>
                    <Typography sx={{flexGrow:1}} variant="h6">
                    <Link  to='/home' style={{textDecoration:"none", color:"black"}}>Home</Link>
                    </Typography>
                    <Typography>
                    {/* {localStorage.getItem('token') ? ( <Link onClick={() => console.log("NO")} style={{textDecoration:"none", color:"black"}}>Logout</Link> ) : ( <Link to='/login' style={{textDecoration:"none", color:"black"}}>Login</Link> )} */}
                    </Typography>
                    <Button color='primary' onClick={ ()=> navigate("/login")}>Login</Button>
                    <Button color='primary' onClick={ ()=> navigate("/signup")}>SignUp</Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
    </>
  )
}
