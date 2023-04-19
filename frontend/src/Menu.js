import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material-next/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import DateIcon from '@mui/icons-material/CalendarMonth';
import CarIcon from '@mui/icons-material/DirectionsCar';

export default function DenseAppBar() {
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
                <Button sx={{ color: 'white', marginRight: 1 }} variant="outlined" startIcon={<HomeIcon />}>Home</Button>
                <Button sx={{ color: 'white', marginRight: 1 }} variant="outlined" startIcon={<DateIcon />}>By Dates</Button>
                <Button sx={{ color: 'white', marginRight: 1 }} variant="outlined" startIcon={<CarIcon />}>Cars</Button>
            </Grid>
            <Grid item xs={1}>
                <IconButton sx={{ margin:0}}>
                    <Avatar sx={{ height:25, width:25, margin:0 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </IconButton>
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}