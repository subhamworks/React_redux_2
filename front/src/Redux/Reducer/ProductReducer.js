import { PRODUCT_TYPE,CART_TYPE,QTY_ADD,QTY_REMOVE,CART_ITEM_REMOVE } from "../Type/ProductType";
const initialstate = {
  ProductItem: [],
  AddToCart: [],
  total: 0,
};
const productReducer = (state = initialstate, action) => {
  if (action.type === "REQUEST") {
    return { ...state };
  }else if (action.type === PRODUCT_TYPE) {
    return {...state,ProductItem:action.payload,...state.AddToCart}
  }else if (action.type === CART_TYPE) {
    let addedItem = state.ProductItem.find(
      (item) => item._id === action.payload
    );
    let existed_item = state.AddToCart.find(
      (item) => action.payload === item._id
    );
    if (existed_item) {
      existed_item.Product_Qty -= 1;
      existed_item.TotalQty += 1;
      existed_item.TotalPrice += existed_item.Product_Price
      return {
        ...state,
        total: state.total + existed_item.Product_Price,
      };
    } else {
      addedItem.Product_Qty -= 1;
      addedItem.TotalQty = 1;
      addedItem.TotalPrice = addedItem.Product_Price
      let newTotal = state.total + addedItem.Product_Price;

      return {
        ...state,
        AddToCart: [...state.AddToCart, addedItem],
        total: newTotal,
      };
    }
  } else if (action.type === QTY_ADD) {
    let existed_item = state.AddToCart.find(
      (item) => action.payload === item._id
    );
    if (existed_item) {
      existed_item.Product_Qty -= 1;
      existed_item.TotalQty += 1;
      existed_item.TotalPrice += existed_item.Product_Price

      return {
        ...state,
        total: state.total + existed_item.Product_Price,
      };
    }
  } else if (action.type === QTY_REMOVE) {
    let existed_item = state.AddToCart.find(
      (item) => action.payload === item._id
    );
    if (existed_item) {
      existed_item.Product_Qty += 1;
      existed_item.TotalQty -= 1;
      existed_item.TotalPrice -= existed_item.Product_Price

      return {
        ...state,
        total: state.total - existed_item.Product_Price,
      };
    }
  } else if (action.type === CART_ITEM_REMOVE){
    const filterData=state.AddToCart.filter(item=>item._id !== action.payload)
    let existed_item = state.AddToCart.find(
      (item) =>    action.payload === item._id
    );
    console.log(existed_item);
      return{
        ...state,
        total: state.total - existed_item.TotalPrice,
        AddToCart:filterData
    }
  
  }
   else {
    return state;
  }
};
export default productReducer;
