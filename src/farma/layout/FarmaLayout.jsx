import { motion } from "framer-motion"
import { NavBar } from "../components/NavBar";
import { RightComponent } from "../components/RightComponent";
import PropTypes from 'prop-types';


export const FarmaLayout = ( {children} ) => {

  return (

    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{  transition: { duration: 0.4 } }}
    transition={{ duration: 0.4 }}
    >

    <div className="container-farma">

        <NavBar />
       
  
            {
              children
            }
         
       
        <RightComponent />

     </motion.div>

  )
}

FarmaLayout.propTypes = {
  children: PropTypes.object
}
