import axios from "axios";
import {PRODUCT_TYPE} from '../Type/ProductType'
export const productsuccess=(data)=>{
    return{
        type:PRODUCT_TYPE,
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
            console.log(res);
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