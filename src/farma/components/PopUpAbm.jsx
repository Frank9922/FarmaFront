import { motion } from 'framer-motion';


export const PopUpAbm = ({titulo, body, Footer}) => {
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

        <div>Titulo</div>

        <div>Boyd</div>

        <div>Footer</div>

      </motion.div>

    </motion.div>

    )
}
