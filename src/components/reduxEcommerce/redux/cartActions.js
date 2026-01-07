import { ADD_TO_CART, INCREASE_QTY, DECREASE_QTY, REMOVE_ITEM } from "./cartActionTypes";

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const increaseQty = (id) => ({ type: INCREASE_QTY, payload: id });
export const decreaseQty = (id) => ({ type: DECREASE_QTY, payload: id });
export const removeItem = (id) => ({ type: REMOVE_ITEM, payload: id });
