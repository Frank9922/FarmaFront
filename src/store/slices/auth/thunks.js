import { api } from "../../../api/api";
import { loaderActive, loaderDisabled, loaderResetPasswordActive, loaderResetPasswordInactive, resetPasswordActive, resetPasswordFalse } from "../ui/uiSlice";
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

                        localStorage.setItem('token', data.token);

                        dispatch(login(data.user));


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


                         const { message } = e.response.data;

                        dispatch(errorResponse(message));

                }


        }

}

export const startLogout = () => {
        

        return async(dispatch) => {

                dispatch(loaderActive());
                
                try {

                        localStorage.removeItem('token');

                        dispatch(logout());


                } catch (e) {

                        console.log(e);

                }

                finally {
                        dispatch(loaderDisabled());
                }


        }

}

export const sendEmailResetPassword = (email) => {

        return async(dispatch) => {

                dispatch(loaderResetPasswordActive());

                try {

                        const algo = await api.post('/api/users/send-reset', {email});
                        dispatch(loaderResetPasswordInactive())
                        
                        return {success:true}


                } catch(e) {
                        
                        dispatch(errorResponse(e.response.data.message))
                        dispatch(loaderResetPasswordInactive())
                        
                        return {success:false}

                }

        }

}

export const verifyTokenPassword = (token) => {

        return async(dispatch) => {
                dispatch(loaderResetPasswordActive());


                try{
                        const algo = await api.post('/api/users/verify-token', {token})

                        console.log(algo);

                } catch(e) {

                        console.log(e);
                }
                finally {
                        dispatch(loaderResetPasswordInactive())

                }
        }

}

export const changeResetPassword = ({email, password}) => {

        return async(dispatch) => {
                dispatch(loaderResetPasswordActive())

                try {

                        const algo = await api.post('/api/users/change-password', {email, password});

                        dispatch(resetPasswordActive())



                } catch(e) {

                        console.log(e)
                        dispatch(resetPasswordFalse());
                } finally {
                        
                        dispatch(loaderResetPasswordInactive())
                }


        }
}