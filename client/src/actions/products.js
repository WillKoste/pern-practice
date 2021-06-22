import axios from 'axios'
import {CREATE_PRODUCT, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING, PRODUCTS_ERROR} from './types'

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/products`)

    console.log(res.data.products);

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: res.data.products
    })
  } catch (err) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: err
    })
  }
}