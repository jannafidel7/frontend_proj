import React from 'react'
import { Rating} from "@mui/material";
const ListReviews = ({ reviews }) => {
    return (
        <div className="reviews w-75">
            <h3>Other's Reviews:</h3>
            <hr />
            {reviews && reviews.map(review => (
                <div key={review._id} class="review-card my-3">
                 
                       
                        <Rating name="half-rating" defaultValue={`${(review.rating) }`} precision={2.5} readOnly/>
               
                    <p className="review_user">by {review.name}</p>
                    <p className="review_comment">{review.comment}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ListReviews