import { ADD_TO_CART, INCREASE_QTY, DECREASE_QTY, REMOVE_ITEM } from "./cartActionTypes";

const initialState = { items: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      }

    case INCREASE_QTY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      };

    case DECREASE_QTY:
      return {
        ...state,
        items: state.items
          .map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter(item => item.quantity > 0)
      };

    case REMOVE_ITEM:
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };

    default:
      return state;
  }
};
