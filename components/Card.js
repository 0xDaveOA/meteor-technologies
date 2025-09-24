import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      className={`card ${className} w-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;


