import React, { useEffect, useState } from 'react'
import imgupload from "../assets/imguploadicon.png";
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Add = ({url}) => {
const [image,setImage]=useState(false);
const [data,setData]=useState({
  name:"",
  description:"",
  price:" ",
  category:"Japanese"
})

const onChangeHandler = (e)=>
  {
    const name=e.target.name;
    const value = e.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const submitForm= async (event)=>{ 
    event.preventDefault();
    const formdata=new FormData();
    formdata.append("name",data.name)
    formdata.append("description",data.description)
    formdata.append("price",Number(data.price))
    formdata.append("category",data.category)
    formdata.append("image",image)
    const response=await axios.post(`${url}/api/food/add`,formdata);
    if(response.data.success)
      {
        setData({
          name:"",
          description:"",
          price:" ",
          category:"Japanese"
        })
        setImage(false);
        toast.success("Food Added Successfully")
      }
    else{
      alert("ZZZ")
        toast.error("Error Adding Food");
      }
  }

  return (
    <div className="add">
      <ToastContainer/>
      <h1>Add Page</h1>
      <form className="flex-col" onSubmit={submitForm}>
        <div className="addimg-upload flex-col">
          <p> Upload Image</p>
          <label htmlFor="image">
            <img src={image? URL.createObjectURL(image): imgupload} />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="type name here" />
        </div>
        <div className="add-product-desc flex-col">
          <p>Product Description</p>
          <textarea
          onChange={onChangeHandler} value={data.description}
            name="description"
            rows="6"
            placeholder="write description here"
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category">
              <option value="Japanese">Japanese</option>
              <option value="South Indian">South Indian</option>
              <option value="North Indian">North Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Thai">Thai</option>
              <option value="Italian">Italian</option>
              <option value="Middle Eastern">Middle Eastern</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Korean">Korean</option>
              <option value="Indian">Indian</option>
              <option value="Peruvian">Peruvian</option>
              <option value="Mexican">Mexican</option>
              <option value="Desserts">Desserts</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price}type="Number" name="price" placeholder="$20" />
          </div>
        </div>
        <button type="submit" className="add-btn">ADD</button>
      </form>
    </div>
  )
}

export default Add
