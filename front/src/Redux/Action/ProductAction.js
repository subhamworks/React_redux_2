import axios from "axios";
import {PRODUCT_TYPE,CART_TYPE,QTY_ADD,QTY_REMOVE,CART_ITEM_REMOVE} from '../Type/ProductType'
export const productsuccess=(data)=>{
    return{
        type:PRODUCT_TYPE,
        payload:data
    }
}

export const cartSuccess=(data)=>{
  return{
      type:CART_TYPE,
      payload:data

  }
}
export const QtyAddSuccess=(data)=>{
    
  return{
      type:QTY_ADD,
      payload:data

  }
}
export const QtyRemoveSuccess=(data)=>{
  
  return{
      type:QTY_REMOVE,
      payload:data

  }
}
export const CartItemRemoveSuccess=(data)=>{
    
  return{
      type:CART_ITEM_REMOVE,
      payload:data

  }
}
const request = (data) => {
    return {
      type: "REQUEST",
    };
  };
export const ProductPage = () => {
    return (dispatch) => {
      dispatch(request);
      axios
        .post("/productlist")
        .then((res) => {
            // console.log(res);
          const {
            data: { data },
          } = res;
          dispatch(productsuccess(data));
        })
        .catch( (err) => {
      console.log(err);
        });
    };
  };