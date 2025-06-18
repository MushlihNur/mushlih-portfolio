import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

function ModalSection({ title, children }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.3 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100vh" },
  };

  const handleClose = () => {
    setIsVisible(false);
    window.history.replaceState(null, "", "/");
  };

  const handleAnimationComplete = (definition) => {
    if (definition === "exit") {
      navigate("/");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex fixed top-0 right-0 left-0 z-[90] justify-center items-center w-full h-[100dvh]"
          initial="hidden"
          animate="visible"
          exit="exit" 
          onAnimationComplete={handleAnimationComplete} 
        >
          <motion.div
            className="fixed top-0 bottom-0 left-0 right-0 bg-black"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit" 
          ></motion.div>

          <motion.div
            className="relative flex flex-col w-[90%] max-w-7xl h-full lg:h-[78vh] max-h-[90vh] rounded-lg bg-color-1 p-4 sm:p-6 md:p-6 lg:py-12 lg:px-8 xl:p-20"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit" 
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.5,
            }}
          >
            <button
              onClick={handleClose} 
              className="absolute top-4 right-4 text-color-3 bg-transparent hover:bg-color-3 hover:text-color-4 rounded-full border-2 border-color-3 text-sm w-8 h-8 inline-flex justify-center items-center focus:bg-color-3 focus-within:text-color-4 transition-all duration-300 ease-in-out group"
            >
              <IoClose className="size-6 text-inherit transform transition-transform duration-300 ease-in-out group-hover:rotate-180" />
            </button>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-center mb-6">{title}</h1>

            <div className="overflow-y-auto flex-1 w-full">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ModalSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ModalSection;