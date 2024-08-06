import { addHistorial } from "./uiSlice";

export const setHistorial = ({ compatibilidad }) => {


    return async (dispatch) => {
        try {
            // Obtener el historial actual o inicializarlo como un array vacío
            let historial = JSON.parse(localStorage.getItem('historial')) || [];

            const nuevoRegistro = {
                compatibilidad,
                horaInsercion: new Date().getTime()
            };


            // Verificar si el elemento ya existe en el historial
            const existe = historial.some(item => JSON.stringify(item.compatibilidad.id) === JSON.stringify(nuevoRegistro.compatibilidad.id));
            

            // Si el elemento no existe, lo agregamos al historial
            if (!existe) {
                historial.push(nuevoRegistro);
                localStorage.setItem('historial', JSON.stringify(historial));
                dispatch(addHistorial(nuevoRegistro ));
            }

            

        } catch (e) {
            console.error(e);
        }
    };
};