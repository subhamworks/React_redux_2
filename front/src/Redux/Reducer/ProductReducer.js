import { PRODUCT_TYPE } from "../Type/ProductType";

const productReducer = (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case "REQUEST":
      return { ...state };
    case PRODUCT_TYPE:
      return [...state,action.payload]
    default:
      return state;
  }
};
export default productReducer;
