import axios from "axios";
import { checkingCredentials, login, logout } from "../../store/slices/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";



export const useCheckAuth = () => {

  const dispatch = useDispatch();
  const token = '34|1MVyuKHCz5dNZiBV0pSvgOzOGkNXRN2lrgMwUshXce48a4d8';
  useEffect(() => {

    dispatch(checkingCredentials());

    const fetchData = async () => {

      if (!token) {
        return dispatch(logout());
      }

      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        dispatch(login(response.data.user));
      } catch (error) {
        dispatch(logout());
    } 
    };

    fetchData();
  }, [dispatch,]); 

  return null; 
};