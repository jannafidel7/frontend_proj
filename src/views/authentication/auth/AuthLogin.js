import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox
} from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../../actions/userActions'

export default function AuthLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let location = useLocation();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    // const redirect = location.search ? location.search.split('=')[1] : ''
    const redirect = new URLSearchParams(location.search).get('redirect')
    const notify = (error = '') => toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER
    });
   
   
   

    useEffect(() => {
        if (isAuthenticated && redirect === 'shipping') {
            navigate(`/${redirect}`, { replace: true })
        }
        else if (isAuthenticated)
        
            navigate('/home')
        if (error) {
            // alert.error(error);
            console.log(error.statusText)
            notify(error.statusText)
            dispatch(clearErrors());
        }

    }, [dispatch, isAuthenticated, error, navigate, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }


    return(
    <>
        {/* {user ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {user}
            </Typography>
        ) : null}

        {subtext} */}
           <form  onSubmit={submitHandler}>
        <Stack>
            <Box>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px">Email</Typography>
                <CustomTextField id="name" variant="outlined" fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                
                />
            </Box>
            <Box mt="25px">
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                <CustomTextField id="password" type="password" variant="outlined" fullWidth 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
            </Box>
            <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Remeber this Device"
                    />
                </FormGroup>
                <Typography
                    component={Link}
                    to="/password/forgot"
                    fontWeight="500"
                    sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                    }}
                >
                    Forgot Password ?
                </Typography>
            </Stack>
        </Stack>
        <Box>
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                type="submit"
            >
                Sign In
            </Button>
        </Box>
        </form>
        <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    <Typography color="textSecondary" variant="h6" fontWeight="500">
                      New to Modernize?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Create an account
                    </Typography>
                  </Stack>
    </>
    

    )
            };

