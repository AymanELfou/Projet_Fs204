// handlecart.js
const initialState = [];

const handlecart = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      // Handle the logic for adding an item to the cart
      return [...state, action.payload];

    case "DELITEM":
      // Handle the logic for removing an item from the cart
      return state.filter((item) => item.id !== action.payload.id);

    case "UPDATEITEM":
      // Handle the logic for updating an item in the cart
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.data }
          : item
      );

    default:
      return state;
  }
};

export default handlecart;
