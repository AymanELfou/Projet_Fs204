import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Thanks() {
  return (


<>
<div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3 className='text-center'>Your Order is in place we will Contact you Soon !</h3>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <Link to="/Products">
        <Button >Continue Shopping!</Button>
        </Link>
      </div>
</>


    )
}

export default Thanks