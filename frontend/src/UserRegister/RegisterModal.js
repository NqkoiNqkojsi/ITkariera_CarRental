import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FormLogIn from './LogIn.js';
import FormSignUp from './SignUp.js';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 12,
  p: 4,
};

const getCookie=(key)=> {
    let b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b;
}

function UserModal({changeApp}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    let id=getCookie("id");
    if(id==null){
        setOpen(true);
    }else{
        changeApp('profile');
    }
  }
  const handleClose = () => setOpen(false);
  const closeModal = React.useCallback(() => {
    setOpen(false);
  });

  return (
    <div>
      <IconButton onClick={handleOpen} sx={{ margin:0}}>
        <Avatar sx={{ height:25, width:25, margin:0 }} alt="Stoil Stoilov" src="profile.jpg" />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
            <Box sx={style}>
            <Grid container spacing={5} columns={11}>
                <Grid item xs={5}>
                    <Typography>Sign Up</Typography>
                    <FormSignUp closeModal={closeModal}></FormSignUp>
                </Grid>
                <Grid item xs={1}>
                    <Divider orientation="vertical" flexItem></Divider>
                </Grid>
                <Grid item xs={5}>
                    <Typography>Log In</Typography>
                    <FormLogIn closeModal={closeModal}></FormLogIn>
                </Grid>
            </Grid>
            </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default React.memo(UserModal);