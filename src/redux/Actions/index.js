export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
export const updateCart = (item) => {
  return {
    type: "UPDATEITEM",
    payload: {
      id: item.id,
      data: item.data,
    },
  };
};
