import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import DateIcon from '@mui/icons-material/CalendarMonth';
import CarIcon from '@mui/icons-material/DirectionsCar';
import UserModal from './UserRegister/RegisterModal';

function DenseAppBar({changeApp}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Grid container spacing={2} columns={24}>
            <Grid item xs={1}>
                <Typography variant="h6" color="inherit" component="div">
                    App
                </Typography>
            </Grid>
            <Grid item xs={22} >
                <Button onClick={()=>changeApp('home')} sx={{ marginRight: 1 }} color='secondary' variant="outlined" startIcon={<HomeIcon />}>Home</Button>
                <Button onClick={()=>changeApp('content')} sx={{marginRight: 1 }} color='secondary' variant="outlined" startIcon={<DateIcon />}>By Dates</Button>
                <Button onClick={()=>changeApp('content')} sx={{ marginRight: 1 }} color='secondary' variant="outlined" startIcon={<CarIcon />}>Cars</Button>
            </Grid>
            <Grid item xs={1}>
                <UserModal changeApp={(x)=>changeApp(x)}></UserModal>
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default React.memo(DenseAppBar);