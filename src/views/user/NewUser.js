import React, { Fragment, useState, useEffect } from 'react'

import { useNavigate,Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {TextField, Button,Box} from "@mui/material";
import { useForm } from "react-hook-form";
import MetaData from '../layouts/MetaData'
import {  newUser ,clearErrors } from '../../actions/userActions'
import { NEW_USER_RESET } from '../../constants/userConstants'

const notifys = (message = "") =>
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


const NewUser = () => {


    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
      const [avatar, setAvatar] = useState("");

      const [avatarPreview, setAvatarPreview] = useState(
        "https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg"
      );


  

    const dispatch = useDispatch();

    const navigate = useNavigate()



    const { loading, error, success } = useSelector(state => state.newUser);
 
   

    const message = (message = '') => toast.success(message, {

        position: toast.POSITION.BOTTOM_CENTER

    });

    useEffect(() => {



        if (error) {

            dispatch(clearErrors())

        }

        if (success) {

            navigate('/admin/users');

            message('User created successfully');

            dispatch({ type: NEW_USER_RESET })

        }



    }, [dispatch, error, success,navigate])



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
        formData.set('avatar', avatar)
        dispatch(newUser(formData))
        }
       

    }

    const onChange = (e) => {
        if (e.target.name === "avatar") {
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {
              setAvatarPreview(reader.result);
              setAvatar(reader.result);
            }
          };
    
          reader.readAsDataURL(e.target.files[0]);
        } else {
          setName({ [e.target.name]: e.target.value });
        }
      };

    return (

        

        <React.Fragment>
            <MetaData title={"Add User"} />
         
        <form onSubmit={submitHandler} encType='multipart/form-data'>
                <h2>New User</h2>
            
                 

                


               
                <div className="form-group">

                                    <label htmlFor="name_field">Name</label>

                                    <input

                                        type="text"

                                        id="name_field"

                                        className="form-control"

                                        value={name}

                                        onChange={(e) => setName(e.target.value)}

                                    />

                </div>

                <div className="form-group">

                                    <label htmlFor="name_field">Email</label>

                                    <input

                                        type="email"

                                        id="name_field"

                                        className="form-control "

                                        value={email}

                                        onChange={(e) => setEmail(e.target.value)}

                                    />

                </div>


                <div className="form-group">

                                    <label htmlFor="name_field">Password</label>

                                    <input

                                        type="password"

                                        id="name_field"

                                        className="form-control input-lg"

                                        value={password}

                                        onChange={(e) => setPassword(e.target.value)}

                                    />

                                    </div>





               
                             

                 
                    
                 
                
                <div className="form-group">
                            <label htmlFor="avatar_upload">Avatar</label>
                            <div className="d-flex align-items-center">
                                <div>
                                <figure className="w-25 p-3">
                                    <img
                                    src={avatarPreview}
                                    className="rounded-circle"
                                    alt="Avatar Preview"
                                    height="50px"
                                    width="50px"
                                    />
                                </figure>
                                </div>
                                <div className="custom-file">
                                <input
                                    type="file"
                                    name="avatar"
                                    className="custom-file-input"
                                    id="customFile"
                                    accept="images/*"
                                    onChange={onChange}
                        
                                required
                                />
                               
                                </div>
                            </div>
                               </div>
 
                
                 <button variant="outlined" className="btn btn-primary"color="secondary" type="submit">Submit</button>
             
        </form>
       
        </React.Fragment>

    )

}

export default NewUser
