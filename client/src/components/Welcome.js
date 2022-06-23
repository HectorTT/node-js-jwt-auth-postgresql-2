import {
  Button,
  Box,
  AppBar,
  Container,
  Toolbar,
  TextField,
  Card,
  Grid,
  CardContent,Typography
} from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Welcome() {
  return (
    <Grid container spacing={3} sx={{mt:15}}>
  <Grid item xs >
   
  </Grid>
  <Grid item xs={10}>
    <Item style={{backgroundColor:"#DFE7ED"}} sx={{height: 450}}>
        <Typography variant="h2" mt={15}> Welcom to Karlo App</Typography>
    </Item>
  </Grid>
  <Grid item xs>
    
  </Grid>
</Grid>
  );
}
