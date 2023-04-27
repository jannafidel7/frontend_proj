import React, { Fragment, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import MetaData from '../layouts/MetaData'
import Loader from '../layouts/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers,  clearErrors, deleteUser } from '../../actions/userActions'
import { DELETE_USER_RESET } from '../../constants/userConstants'



const UsersList = () => {

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const { loading, error, users } = useSelector(state => state.allUsers);

    const { isDeleted } = useSelector(state => state.user)

    const errMsg = (message = '') => toast.error(message, {

        position: toast.POSITION.BOTTOM_CENTER

    });

    const successMsg = (message = '') => toast.success(message, {

        position: toast.POSITION.BOTTOM_CENTER

    });

    useEffect(() => {

        dispatch(allUsers());

        if (error) {

            errMsg(error);

            dispatch(clearErrors())

        }



        if (isDeleted) {

            successMsg('User deleted successfully');

            navigate('/admin/users');

            dispatch({ type: DELETE_USER_RESET })

        }



    }, [dispatch,  error, isDeleted, navigate])

   





    const deleteUserHandler = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(id))
              Swal.fire(
                'Deleted!',
                'User has been deleted.',
                'success'
              )
            }
          })
    }



    const setUsers = () => {

        const data = {

            columns: [

                {

                    label: 'User ID',

                    field: 'id',

                    sort: 'asc'

                },

                {

                    label: 'Name',

                    field: 'name',

                    sort: 'asc'

                },

                {

                    label: 'Email',

                    field: 'email',

                    sort: 'asc'

                },

                {

                    label: 'Role',

                    field: 'role',

                    sort: 'asc'

                },

                {

                    label: 'Actions',

                    field: 'actions',

                },

            ],

            rows: []

        }

        users.forEach(user => {

            data.rows.push({

                id: user._id,

                name: user.name,

                email: user.email,

                role: user.role,

                actions: <Fragment>

                    <Link to={`/admin/user/${user._id}`} className="btn btn-primary py-1 px-2">

                    <i class="bi bi-pen-fill"></i>

                    </Link>

                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteUserHandler(user._id)}>

                    <i class="bi bi-trash3-fill"></i>

                    </button>

                </Fragment>

            })

        })

        return data;

    }



    return (

        <Fragment>

            <MetaData title={'All Users'} /> 

            
                    <Fragment>

                    <Link to={`/admin/newuser`} >
                    <button type="button" className="btn btn-primary btn- float-end" >
                    Add User
                    </button>
                    </Link>
                        <h1 className="my-5">All Users</h1>

                       

                        {loading ? <Loader /> : (

                            <MDBDataTable

                                data={setUsers()}

                                className="px-3"

                                bordered

                                striped

                                hover

                            />

                        )}

                    </Fragment>


        </Fragment>

    )

}



export default UsersList

