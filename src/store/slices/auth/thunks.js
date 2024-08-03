import { api } from "../../../api/api";
import { checkingCredentials, errorResponse, login, logout } from "./authSlice"




export const checkingAuthentication = () => {

        return async(dispatch) => {
                dispatch(checkingCredentials());
        }

}




export const startRegister = ({ nombre, apellido, email, password}) => {

        return async(dispatch) => {

                dispatch(checkingCredentials());

                try {
                        const { data } = await api.post('/api/create', { 
                                name : nombre + ' ' + apellido,
                                email : email,
                                password: password

                        })

                        console.log(data);

                        localStorage.setItem('token', data.token);

                        dispatch(login(data.usuario));


                } catch (e) {

                         const { errors } = e.response.data;

                        dispatch(errorResponse(errors));

                        }


        }

        

       




}

export const startLoginWithEmalAndPassword = ({email, password}) => {

        return async(dispatch) => {

                dispatch(checkingAuthentication());

                try {
                        const { data } = await api.post('/api/login', {email, password})

                        localStorage.setItem('token', data.token);

                        dispatch(login(data.user));


                } catch (e) {

                         const { errors } = e.response.data;

                        dispatch(errorResponse(errors));

                        }


        }

}

export const startLogout = () => {
        
        const token = localStorage.getItem('token');

        return async(dispatch) => {
                
                try {
                        const { data } = await api.get('/api/logout', {
                                headers: {'Authorization' : `Bearer ${token}`}
                        } )

                        localStorage.removeItem('token');

                        dispatch(logout());


                        console.log(data);
                } catch (e) {

                        console.log(e);

                }


        }

}