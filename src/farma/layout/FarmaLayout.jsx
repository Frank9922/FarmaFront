import PropTypes from 'prop-types';
import { NavBar } from '../components/NavBar';
import { RightComponent } from '../components/RightComponent';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toggleNavbar } from '../../store/slices/ui/uiSlice';


export const FarmaLayout = ( {children} ) => {

  const dispatch = useDispatch()

  const handleButtonClick = () => {
      dispatch(toggleNavbar());
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
