import React, { useState } from "react";
import axios from 'axios';

const AddBooks = () => {
  // State
  const [data, setData] = useState({
    title: "",
    author: "",
    description: "",
    cover: "",
    price: ""
  });

  // Function
  const change = (e) => {
    const { name, value } = e.target;
    setData({...data,  [name]: value });
    console.log(data);
  }

  const submit = async (e) => {
    e.preventDefault();
    await axios
          .post("https://book-store-server-1736.onrender.com/api/books", data)
          .then((res) => console.log(res));
      setData({
        title: "",
        author: "",
        description: "",
        cover: "",
        price: ""
      })
  }

  return (
    <div className="bg-dark addbooks" style={{ minHeight: "91.5vh"}}>
      <div className="formfield" style={{ minHeight: "91-5vh"}}>
      <h2> ADD BOOK </h2>
      <input
            type="text"
            id="exampleFormControlInput1"
            placeholder="Enter Book Name"
            name="title"
            onChange={change}
            value={data.title}
      />
      <input
            type="text"
            id="exampleFormControlInput1"
            placeholder="Enter Author Name"
            name="author"
            onChange={change}
            value={data.author}
      />

      <input
            type="text"
            id="exampleFormControlInput1"
            placeholder="Description"
            name="description"
            onChange={change}
            value={data.description}
      />
      <input
            type="text"
            id="exampleFormControlInput1"
            placeholder="Enter The URL or the cover"
            name="cover"
            onChange={change}
            value={data.cover}
      />
      <input
            type="Number"
            id="exampleFormControlInput1"
            placeholder="Enter Price"
            name="price"
            onChange={change}
            value={data.price}
      />

      <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default AddBooks;
