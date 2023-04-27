import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MetaData from '../layouts/MetaData'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../actions/productActions'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'



const NewProduct = () => {

    const [name, setName] = useState('');

    const [price, setPrice] = useState(0);

    const [description, setDescription] = useState('');

    const [category, setCategory] = useState('');

    const [stock, setStock] = useState(0);

    const [seller, setSeller] = useState('');

    const [images, setImages] = useState([]);

    const [imagesPreview, setImagesPreview] = useState([])

    const categories = [

        "Women Top",
        "Men Top",
        "Jeans",
        "Coat",
        "Men Watch",
        "Women Watch",
        "Indoor Shoes",
        "Outdoor Shoes",
        "Fashion Shoes",

    ]



    const dispatch = useDispatch();

    let navigate = useNavigate()



    const { loading, error, success } = useSelector(state => state.newProduct);

    const message = (message = '') => toast.success(message, {

        position: toast.POSITION.BOTTOM_CENTER

    });

    useEffect(() => {



        if (error) {

            dispatch(clearErrors())

        }

        if (success) {

            navigate('/admin/products');

            message('Product created successfully');

            dispatch({ type: NEW_PRODUCT_RESET })

        }



    }, [dispatch, error, success,navigate])



    const submitHandler = (e) => {

        e.preventDefault();

        if(!name){
           toast.error('Name is Required');
        }
        else if(!price) {
            toast.error('Price is Required');
        }
        else if(!description){
            toast.error('Description is Required');     
        }
        else if(!category){
            toast.error('Category is Required');
        }
        else if(!stock){
            toast.error('Stock is Required');
        }
        else if(!seller){
            toast.error('Seller is Required');
        }
        else if(!images){
            toast.error('Image(s) is Required');
        }else
        {
            const formData = new FormData();

            formData.set('name', name);
    
            formData.set('price', price);
    
            formData.set('description', description);
    
            formData.set('category', category);
    
            formData.set('stock', stock);
    
            formData.set('seller', seller);
    
            images.forEach(image => {
    
                formData.append('images', image)
    
            })
    
            dispatch(newProduct(formData))
        }



      

    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);

        setImages([])

        files.forEach(file => {

            const reader = new FileReader();

            reader.onload = () => {

                if (reader.readyState === 2) {

                    setImagesPreview(oldArray => [...oldArray, reader.result])

                    setImages(oldArray => [...oldArray, reader.result])

                }

            }

            reader.readAsDataURL(file)

        })

    }

    return (

        <Fragment>

            <MetaData title={'New Product'} />

           

                    <Fragment>

                       

                            <form  onSubmit={submitHandler} encType='multipart/form-data'>

                                <h1 className="mb-4">New Product</h1>



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

                                    <label htmlFor="price_field">Price</label>

                                    <input

                                        type="number"

                                        id="price_field"

                                        className="form-control"

                                        value={price}

                                        onChange={(e) => setPrice(e.target.value)}

                                    />

                                </div>

                                <div className="form-group">

                                    <label htmlFor="description_field">Description</label>

                                    <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                                </div>



                                <div className="form-group">

                                    <label htmlFor="category_field">Category</label>

                                    <select className="form-control" id="category_field" value={category} onChange={(e) => setCategory(e.target.value)}>

                                        {categories.map(category => (

                                            <option key={category} value={category} >{category}</option>

                                        ))}



                                    </select>

                                </div>

                                <div className="form-group">

                                    <label htmlFor="stock_field">Stock</label>

                                    <input

                                        type="number"

                                        id="stock_field"

                                        className="form-control"

                                        value={stock}

                                        onChange={(e) => setStock(e.target.value)}

                                    />

                                </div>



                                <div className="form-group">

                                    <label htmlFor="seller_field">Seller Name</label>

                                    <input

                                        type="text"

                                        id="seller_field"

                                        className="form-control"

                                        value={seller}

                                        onChange={(e) => setSeller(e.target.value)}

                                    />

                                </div>



                                <div className='form-group'>

                                    <label>Images</label>



                                    <div className='custom-file'>

                                        <input

                                            type='file'

                                            name='images'

                                            className='custom-file-input'

                                            id='customFile'

                                            onChange={onChange}

                                            multiple
                                            required

                                        />

                                        <label className='custom-file-label' htmlFor='customFile'>

                                            Choose Images

                                     </label>

                                    </div>



                                    {imagesPreview.map(img => (

                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />

                                    ))}



                                </div>





    
                            <button variant="outlined" 
                            className="btn btn-primary"
                            color="secondary" 
                            type="submit" 
                             disabled={loading ? true : false}>
                            Submit</button>



                            </form>

                     

                    </Fragment>

             



        </Fragment>

    )

}

export default NewProduct

