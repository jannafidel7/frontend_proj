import React from 'react'
import { Link } from "react-router-dom";
import { Rating} from "@mui/material";
import { Card, CardContent, CardActions, Button, Typography,IconButton} from '@mui/material';

const Product = ({ product }) => {
    return (
       
<div className="col-sm-10 col-md-10 col-lg-3 my-6">

<Card sx={{ maxWidth: 345 }}>
      <CardContent>
      <img
                    className="card-img-top mx-auto"
                    src={product.images[0].url}
                />
        <Typography gutterBottom variant="h5" component="div" >
        <h5 className="card-title">
                     
                    <Link to={`/product/${product._id}`}  style={{ textDecoration: 'none' }} >{product.name}</Link>
        </h5>
        {/* <Link to={`/product/${product._id}`} color="secondary" style={{ textDecoration: 'none' }}  >{product.name}</Link> */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Rating name="half-rating" defaultValue={`${product.ratings/product.numOfReviews}`} precision={2.5} readOnly/>
          <span id="no_of_reviews">({product.numOfReviews} reviews)</span>
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
        ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <IconButton  component={Link} to={`/product/${product._id}`} aria-label="Add to cart">
        <i class="bi bi-arrow-right-square-fill"></i>
        </IconButton>
        <Button component={Link} to={`/product/${product._id}`} variant="contained" size="small">Details</Button>
      </CardActions>
    </Card>
    </div>
    )
}
export default Product