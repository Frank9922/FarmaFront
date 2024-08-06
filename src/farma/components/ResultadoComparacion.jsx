import PropTypes from 'prop-types';
import { motion } from 'framer-motion';


export const ResultadoComparacion = ({compa}) => {


    const color = (nombre) => {

        const string = nombre.toLowerCase();
        
        return string.replace(/\s/g, '')


    }


  return (

    <motion.div
    className={`recent-orders ${color(compa.compatibilidad.name)}`}
    initial={{opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    
            <div className="head-result">
                <span className="material-symbols-outlined">monitoring</span>
                <h2>Resultado</h2>
            </div>

            <div className="middle">

                <div className="left">
                    <h1>{compa.compatibilidad.name}</h1>
                </div>

                <div className="progreso">

                </div>
            </div>
        </motion.div>
    );
};

ResultadoComparacion.propTypes = {
    compa: PropTypes.shape({
        compatibilidad: PropTypes.shape({
            name: PropTypes.string,
            color: PropTypes.string
        })
    }),
  };
  

