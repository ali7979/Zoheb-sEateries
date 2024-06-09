import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchlist = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      console.log(response.data.data);
      setList(response.data.data);
    } else {
      toast.error("Error Fetching Data");
    }
  };

const removeFood = async(fid) =>{
  const response =await axios.post(`${url}/api/food/remove`,{id:fid});

  await fetchlist();
  if  (response.data.success)
    {
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }

}



  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div className="add">
      <ToastContainer />
      <h1>All Foods List</h1>
      <div className="list-table">
        <div className="list-table-formatlist title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
          <div key={index} className="list-table-formatlist">
            <img src={item.image} alt="image" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>Rs {item.price}</p>
            <p onClick={()=>removeFood(item._id)}  style={{fontWeight:'bold',color:'red',cursor:'pointer'}}>X</p>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;
