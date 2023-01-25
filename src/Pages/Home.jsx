import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home-Page bg-dark text-white container-fluid d-flex justify-content-center           align-items-center'>
      <div className="row container">
        <div
          className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "80px" }}>BOOK STORE</h2>
          <h2 style={{ fontSize: "50px" }}>FOR YOU</h2>
          <p className='mb-0' style={{ color: "silver" }}>Checkout the Books From Here</p>
          <Link className='viewbook my-3' to="/books">View Books</Link>
        </div>
        <div
          className='col-lg-6 d-flex justify-content-center align-items-end flex-column'
          style={{ height: "91.5vh" }}
        >
          <img 
            className='img-fluid homeimg'
            src="https://i.guim.co.uk/img/media/423d3ddf306e98864c1d887c1dcf290421cd21a7/0_169_4912_6140/master/4912.jpg?width=700&quality=85&auto=format&fit=max&s=864393ed1c322fc5ddcb2766c3c945e6" 
            alt="" 
          />
        </div>
      </div>
    </div>
  )
}

export default Home;