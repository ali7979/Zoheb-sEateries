import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);
import axios from "axios";
// import {foodlist} from "../assets/foodlist"
const StoreContextProvider = (props) => {
  const [foodlist, setfoodlist] = useState([]);

  const url = "https://zoheb-s-eateries-xob8.vercel.app";
  const [token, setToken] = useState("");
  const [cartItems, setcartItems] = useState({});

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
        
      await axios.post(url+"/api/cart/add",{itemId},  {headers:{token}});
    }
  };

  

  const removeCart = async (itemId) => {
    setcartItems((prev) => {
      const updatedCart = { ...prev };
      // Decrease the quantity of the item by 1
      updatedCart[itemId] -= 1;
      // If the quantity becomes 0, remove the item from the cart list
      if (updatedCart[itemId] === 0) {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
    if (token) {
        
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
      }
  };

  const getTotalCartAmount = () => {
    let totalamt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodlist.find((product) => product._id === item);
        totalamt += itemInfo.price * cartItems[item];
      }
    }
    return totalamt;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setfoodlist(response.data.data);
  };



  const loadCartData = async(token)=>{
    const response = await axios.get(url+"/api/cart/get",{headers:{token}}); // blank {} , as we are not sending any data in body 
    setcartItems(response.data.cartData);
  }



  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    foodlist,
    cartItems,
    setcartItems,
    addToCart,
    removeCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
