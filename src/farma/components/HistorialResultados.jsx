import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { clearHistorial } from '../../store/slices/ui/uiSlice';




export const HistorialResultados = () => {

    const { historial } = useSelector(state => state.ui)

    const dispatch = useDispatch();


    const color = (nombre) => {

        const string = nombre.toLowerCase();
        
        return string.replace(/\s/g, '')

    }

    const onButton = () => {
        dispatch(clearHistorial())
    }

    function calcularTiempoTranscurrido(timestamp) {
        const ahora = new Date();
        const entonces = new Date(timestamp);
        const diferenciaEnMilisegundos = ahora - entonces;
      
        // Convertir a segundos, minutos, horas y días
        const segundos = Math.floor(diferenciaEnMilisegundos / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas   
/ 24);
      
        // Formatear la fecha
        const opciones = { weekday: 'short', day: 'numeric', month: 'short' };
        const fechaFormateada = entonces.toLocaleDateString('es-ES', opciones);
      
        // Retornar la cadena de texto adecuada
        if (dias > 0) {
          return `hace ${dias} días (${fechaFormateada})`;
        } else if (horas > 0) {
          return `hace ${horas} horas`;
        } else if (minutos > 0) {
          return `hace ${minutos} minutos`;
        } else {
          return 'hace unos segundos';
        }
      }


  return (
    <div className="recent-updates">

        <h2>Busquedas Recientes</h2>
        <div className="updates">
        

        {
        historial.length > 0 ? (
          <>
          
            {historial.map((registro, index) => (
                
            <motion.div             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{  transition: { duration: 0.7 } }}
            transition={{ duration: 0.7 }} className="update" key={index}>

                <div className={`${color(registro.compatibilidad.compatibilidad.name)}`}></div>
                    <div className="message">
                        <p><b>{registro.compatibilidad.first_farmaco.name}</b> + <b>{registro.compatibilidad.second_farmaco.name}</b></p>
                        <small className="text-muted">{calcularTiempoTranscurrido(registro.horaInsercion)}</small>
                    </div>

            </motion.div>
            ))},
            <div>
              <button onClick={onButton}>
                Eliminar Historial
              </button>
            </div>
        </>
        ) : (
    <p>Historial disponible cuando realice una comparación.</p>
  )
}



        </div>
    </div>
  )
}

HistorialResultados.propTypes = {
    compa: PropTypes.shape({

    })
}
