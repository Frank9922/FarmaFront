import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


export const PopUpAlert = ({title, body, footer, type, isOpen, onClose}) => {


  return (
    <>
    
    { isOpen ? 
    
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
        <div className='header-popup'>
          <div className='title'>
          <span style={{color: 'red'}} className="material-symbols-outlined">info</span>
          <h2>
          {title}
          </h2>
            
          </div>
          
          <button style={{background:'transparent'}} onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className='body-popup'>
            {body}
          </div>

      </motion.div>

    </motion.div>
    : null  
} 
    </>
    )
}

PopUpAlert.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  footer: PropTypes.string,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  cancelButton: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func
  })
};
