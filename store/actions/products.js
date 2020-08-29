import { DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT } from "../constants/actionTypes";

export const deleteProduct = (productId) => {
  return { type: DELETE_PRODUCT, productId };
};

export const createProduct = (title, description, image, price) => {
  return {
    type: CREATE_PRODUCT,
    productData: { title, description, image, price },
  };
};

export const updateProduct = (id, title, description, image) => {
  return {
    type: UPDATE_PRODUCT,
    id,
    productData: { title, description, image },
  };
};
