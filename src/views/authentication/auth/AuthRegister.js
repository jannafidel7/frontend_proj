import React, { Fragment, useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';


import { useNavigate } from 'react-router-dom'
import MetaData from '../../layouts/MetaData'

import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../../actions/userActions'
import {toast} from 'react-toastify'

export default function AuthRegister () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg')

   
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if (isAuthenticated) {
            navigate('/')
        }

        if (error) {
            // alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, isAuthenticated, error, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        if(!name){
            toast.error('Name is Required');
          }
          else if(!email){
            toast.error('Email is Required');
          }
          else if(!password){
            toast.error('Password is Required');
          }
          else if(!avatar){
            toast.error('Avatar is Required');
          }
          else
          {

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('avatar', avatar);

        dispatch(register(formData))
          }
    }

    const onChange = e => {
        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            // setUser({ ...user, [e.target.name]: e.target.value })
        }
    }


    return(
    <>
       
            <Typography fontWeight="700" variant="h2" mb={1}>
             
            </Typography>
      

       

        <Box>
        <form  onSubmit={submitHandler} encType='multipart/form-data'>
            <Stack mb={3}>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
                <CustomTextField id="name"  variant="outlined" value={name}
                                  onChange={(e) => setName(e.target.value)} fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                <CustomTextField id="email" value={email}
                                  onChange={(e) => setEmail(e.target.value)} variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                <CustomTextField type="password" id="password" value={password}
                                  onChange={(e) => setPassword(e.target.value)} variant="outlined" fullWidth />

                    <div className='form-group'>
                            <label htmlFor='avatar_upload'>Avatar</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <figure className='avatar mr-3 item-rtl'>
                                        <img
                                            src={avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                        accept="images/*"
                                        onChange={onChange}
                                        required
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Avatar
                                    </label>
                                </div>
                            </div>
                        </div>

            </Stack>
            <Button color="primary" variant="contained" size="large" type="submit"  fullWidth>
                Sign Up
            </Button>
            </form>
        </Box>
        <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
                  <Typography color="textSecondary" variant="h6" fontWeight="400">
                    Already have an Account?
                  </Typography>
                  <Typography 
                    component={Link}
                    to="/auth/login"
                    fontWeight="500"
                    sx={{
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                    Sign In
                  </Typography>
                </Stack>

      
    </>
    )
        };


