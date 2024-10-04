import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Select from 'react-select/async'
import { useEffect, useRef } from 'react';


export const PopUp = ({onClose, farmacos, loadOptions, inputValue, onSelect}) => {


  const selectRef = useRef(null);

  // Usar useEffect para enfocar el select cuando el popup se abra
  useEffect(() => {
    
    // Esperar a que el popup se monte y se anime
    const timer = setTimeout(() => {
      if (selectRef.current) {
        // Llamar al método focus en el select
        selectRef.current.focus();
      }
    }, 300); // Ajusta el tiempo de espera si es necesario

    // Limpiar el timer si el componente se desmonta antes del tiempo
    return () => clearTimeout(timer);
  }, []); // El array vacío asegura q

  return (
    <motion.div
      className="popup-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="popup"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button style={{background:'transparent'}} onClick={onClose}>
        <span className="material-symbols-outlined">close</span>
        </button>
            <Select
                ref={selectRef}
                isDisabled={farmacos.length >= 2}
                loadOptions={loadOptions}
                className="select-options"
                value={inputValue}
                defaultOptions
                onChange={onSelect}
                />



      </motion.div>
    </motion.div>
)
}

PopUp.propTypes = {
    onClose : PropTypes.func,
    farmacos: PropTypes.array,
    loadOptions: PropTypes.func,
    inputValue: PropTypes.bool,
    onSelect: PropTypes.func
}
