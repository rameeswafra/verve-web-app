import { ORDERS_LIST_FAIL, ORDERS_LIST_REQUEST, ORDERS_LIST_SUCCESS } from "../constants/ordersConstants";
import axios from 'axios';


export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders`, config);

    dispatch({
      type: ORDERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
    
    : error.message;
    //error message come from backend
    dispatch({
      type: ORDERS_LIST_FAIL,
      payload: message,
    });
  }
};
