import React from 'react';
// import axios from 'axios';

const BookSection = ({ data }) => {

  // Functions
  const deleteBook = async (id) => {
    // your delete logic here
    const response = await fetch(`http://localhost:4000/api/books/${id}`, {
      method: 'DELETE',
    });
    const json = await response.json();
    console.log(json);
  }  

  return (
    <div className='books_section container'> 
      {data && data.map((item, index) => (
        <div className='cards'>
          <img src={item.cover} alt="Book Cover" />
          <div className='heads'>
            <h6>{item.title.slice(0, 20)}...</h6>
            <p className='desc'>{item.description.slice(0, 43)}...</p>
            <p>BDT- <b>{item.price}</b> /-</p>
            <div className="buttons">
              <span>Update</span>
              <span onClick={() => deleteBook(item._id)}>Delete</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookSection;