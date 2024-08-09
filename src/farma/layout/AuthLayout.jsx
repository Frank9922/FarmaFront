import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import { useLayoutEffect, useState } from 'react';


export const AuthLayout = ( { children }) => {

  const [isFirstRender, setIsFirstRender] = useState(true);

  useLayoutEffect(() => {
    setIsFirstRender(false);
  }, [])

  const variants = {
    initial: isFirstRender ? { opacity: 0 } : {},
    animate: { opacity: 1 },
    exit: { transition: { duration: 0.4 } },
  };

  return (
    <motion.div
    variants={variants}
    animate="animate"
    exit="exit"
    transition={{ duration: 0.4}}
    >

   

    <div className="container">
      <div className="cont-img">
        <img src="https://th.bing.com/th/id/R.365522f7602d4fc6687e28be050d4cc2?rik=%2f9MOZ2QncWyIPQ&riu=http%3a%2f%2fwww.philly.com%2fresizer%2fL5MP5pfMKBXIuNEsk-QxbZ8wKqo%3d%2f1400x932%2fsmart%2farc-anglerfish-arc2-prod-pmn.s3.amazonaws.com%2fpublic%2fE5NOTV742FGDNN2EJL72RKF6OQ.jpg&ehk=kDatiqoNh9HnpTjVPyryXXGfZtIHon22oNoNs7Iaw2c%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </div>
      <div className="cont-form">

        { children }

      </div>
      
    </div> 
  
    </motion.div>

  )

}

AuthLayout.propTypes = {
    children: PropTypes.object
  }
