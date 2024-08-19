import PropTypes from 'prop-types';
import { NavBar } from '../components/NavBar';
import { RightComponent } from '../components/RightComponent';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/slices/ui/uiSlice';


export const FarmaLayout = ( {children} ) => {

  const [open, setopen] = useState(false)
  
  const dispatch = useDispatch()


  const handleButtonClick = () => {
      dispatch(toggleMenu());
  }

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

      <RightComponent openMenu={handleButtonClick}/>

</div>



  )
}

FarmaLayout.propTypes = {
  children: PropTypes.object
}
