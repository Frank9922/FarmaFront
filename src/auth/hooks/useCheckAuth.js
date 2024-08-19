import axios from "axios";
import { checkingCredentials, login, logout } from "../../store/slices/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";



export const useCheckAuth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  useEffect(() => {

    dispatch(checkingCredentials());

      if (!token) {

        return dispatch(logout());
      }

      api.get('/api/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
      
      dispatch(login(response.data.user));
      return navigate('/compatibilidad');

    })

    .catch((error) => {

      localStorage.removeItem('token');
        
     dispatch(logout())

    })


    }, []);

}