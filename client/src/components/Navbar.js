import {Button,Box, AppBar,Container, Typography,Toolbar} from '@mui/material'
import {Link,useNavigate} from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
  return (
    <Box sx={{flexGrow:1}}>
        <AppBar position="static" color="transparent">
            <Container>
                <Toolbar>
                    <Typography sx={{flexGrow:1}} variant="h6">
                    <Link  to='/' style={{textDecoration:"none", color:"black"}}>Home</Link>
                    </Typography>
                    <Button color='primary' onClick={ ()=> navigate("/login")}>Login</Button>
                    <Button color='primary' onClick={ ()=> navigate("/signup")}>SignUp</Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  )
}
