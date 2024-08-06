import PropTypes from 'prop-types';
import { NavBar } from '../components/NavBar';
import { RightComponent } from '../components/RightComponent';
import { motion } from 'framer-motion';


export const FarmaLayout = ( {children} ) => {

  return (

    
<div className="container-farma">
       
    <NavBar />

        <main>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{  transition: { duration: 0.7 } }}
            transition={{ duration: 0.7 }}
            className="search">

            { children }

          </motion.div>

        </main>

      <RightComponent />

</div>



  )
}

FarmaLayout.propTypes = {
  children: PropTypes.object
}
