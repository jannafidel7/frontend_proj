import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { IconUser,IconDashboard,IconMenuOrder } from '@tabler/icons';
import { logout } from '../../../actions/userActions'
import ProfileImg from 'src/assets/images/profile/user-1.jpg';
import { toast } from "react-toastify";
const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const notify = (message = "") =>
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const dispatch = useDispatch();
	const { user, loading } = useSelector(state => state.auth)
	// const { cartItems } = useSelector(state => state.cart)
  // const { user, loading } = useSelector(state => state.auth)
	const logoutHandler = () => {
    notify('Logged Out')
		dispatch(logout());
	}

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main',
          }),
        }}
        onClick={handleClick2}
      >
        {user ? (
        <Avatar
          src={user.avatar && user.avatar.url}
          alt={user && user.name}
          sx={{
            width: 35,
            height: 35,
          }}
        />
        ) : !loading &&
         <Avatar
          src={ProfileImg}
          alt={ProfileImg}
          sx={{
            width: 35,
            height: 35,
          }}
        />
    }
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      {user ? (
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '200px',
          },
        }}
      >
        	{user && user.role === 'admin' && (
         <MenuItem component={Link} to="/dashboard">
          <ListItemIcon>
            <IconDashboard width={20} />
          </ListItemIcon>
          <ListItemText >Dashboard</ListItemText>
        </MenuItem>
        )}
     
        <MenuItem component={Link} to="/me">
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText >My Profile</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/orders/me">
          <ListItemIcon>
            <IconMenuOrder width={20} />
          </ListItemIcon>
          <ListItemText>My Orders</ListItemText>
        </MenuItem>
  
      
        <Box mt={1} py={1} px={2}>
          <Button to="/home" variant="outlined" color="primary" component={Link} onClick={logoutHandler} fullWidth>
            Logout
          </Button>
        </Box>
        
      </Menu>
         ) : !loading &&  <Menu
         id="msgs-menu"
         anchorEl={anchorEl2}
         keepMounted
         open={Boolean(anchorEl2)}
         onClose={handleClose2}
         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
         sx={{
           '& .MuiMenu-paper': {
             width: '200px',
           },
         }}
       >
      
        <Box mt={1} py={1} px={2}><Button to="/auth/login" variant="outlined" color="primary" component={Link}  fullWidth>
         Log In
       </Button></Box> 
       </Menu> }
      
    </Box>
  );
};

export default Profile;
