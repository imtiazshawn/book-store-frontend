import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookSection from '../Components/BookSection';

const Books = () => {
  // States
  const [data, setData] = useState();

  // Hook
  useEffect(() => {
    const fetch = async () => {
      await axios
          .get('http://localhost:4000/api/books')
          .then((res) => setData(res.data));
    };
    fetch();
  }, []);

  return (
    <div className='bg-dark' style={{ minHeight: "91.5vh"}}>
      <div className='d-flex justify-content-center align-items-center py-3'>
        <h4 className='text-white'>Books Section</h4>
      </div>
      {data ? (
        <BookSection data={data} key={data._id} />
      ): (
        <div className='text-white loading'>
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
}

export default Books;