import React, { Fragment, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import Swal from 'sweetalert2'
import MetaData from '../layouts/MetaData'
import Loader from '../layouts/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts, 
    deleteProduct, 
    clearErrors } from '../../actions/productActions'
import { DELETE_PRODUCT_RESET } from '../../constants/productConstants'
const ProductsList = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate()
    const { loading, error, products } = useSelector(state => state.products);
    const { error: deleteError, isDeleted } = useSelector(state => state.product)
    useEffect(() => {
        dispatch(getAdminProducts());
        if (error) {
            dispatch(clearErrors())
        }
        if (deleteError) {
            dispatch(clearErrors())
        }
        if (isDeleted) {
            
            navigate('/admin/products');
            dispatch({ type: DELETE_PRODUCT_RESET })
        }



    }, [dispatch,  error, navigate, isDeleted, deleteError])

    
    // [dispatch, alert, error, deleteError, isDeleted, navigate])
    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc'
                },
               {
                    label: 'Stock',
                    field: 'stock',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }
        products.forEach(product => {
            data.rows.push({
                id: product._id,
                name: product.name,
                price: `$${product.price}`,
                stock: product.stock,
                actions: <Fragment>
                    <Link to={`/admin/product/${product._id}`} className="btn btn-primary py-1 px-2">
                    <i class="bi bi-pen-fill"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)}>
                    <i class="bi bi-trash3-fill"></i>
                    </button>
                </Fragment>
            })
        })
        return data;
    }
    const deleteProductHandler = (id) => {

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
                dispatch(deleteProduct(id))

              Swal.fire(
                'Deleted!',
                'Product has been deleted.',
                'success'
              )
            }
          })

    }
    return (
        <Fragment>

                <Link to={`/admin/newproduct`} >
                    <button type="button" className="btn btn-primary btn- float-end" >
                    Add Product
                    </button>
                    </Link>
          <MetaData title={'All Products'} />
          
                    <Fragment>
                        <h1 className="my-5">All Products</h1>
                        {loading ? <Loader /> : (

                            <MDBDataTable
                                data={setProducts()}
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
export default ProductsList