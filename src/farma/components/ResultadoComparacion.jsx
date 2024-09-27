import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useGetInfoComparacionIaQuery } from '../../store/apis/checkApi';


export const ResultadoComparacion = ({compa}) => {

    const [skip, setSkip] = useState(true)

    const farma1 = compa.first_farmaco.name
    const farma2 = compa.second_farmaco.name

    const farmacos = [farma1, farma2]

    const { isFetching, data } = useGetInfoComparacionIaQuery(farmacos, {skip : skip});

    const color = (nombre) => {

        const string = nombre.toLowerCase();
        
        return string.replace(/\s/g, '')

    }

    const onSumbit = async() => {
        
        setSkip(false);
        
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
                    {
                        skip ? 
                         <button onClick={onSumbit}>
                            Consultar con IA
                            </button>
                         : null
                    }



                </div>
                {
                    !skip ? 
                    <div className='ia-contenedor'>
                        
                        {
                            isFetching ? <div className='spinner'></div> : <p>{data.text}</p>
                        }

                    </div>
                    : null
                }
            </div>
        </motion.div>
    );
};

ResultadoComparacion.propTypes = {
    compa: PropTypes.shape({
        first_farmaco: PropTypes.shape({
            name: PropTypes.string,
        }),
        second_farmaco: PropTypes.shape({
            name: PropTypes.string,
        }),
        compatibilidad: PropTypes.shape({
            name: PropTypes.string,
            color: PropTypes.string
        })
    }),
  };
  

