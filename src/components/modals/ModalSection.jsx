import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ModalSection({ title, children }) {
  const navigate = useNavigate();

  return (
    <div className="flex fixed top-0 right-0 left-0 z-[90] justify-center items-center w-full h-screen">
      {/* Background Overlay */}
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-30"></div>
      
      {/* Modal Content */}
      <div className="relative flex flex-col w-full max-w-7xl max-h-[90vh] rounded-lg bg-color-1 p-4 sm:p-6 md:p-6 lg:py-12 lg:px-8 xl:p-20">
        {/* Close Button */}
        <button 
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-color-3 bg-transparent hover:bg-color-3 hover:text-color-4 rounded-full border-2 border-color-3 text-sm w-8 h-8 inline-flex justify-center items-center focus:bg-color-3 focus-within:text-color-4 transition-all duration-300 ease-in-out">
          <IoClose className="size-6 text-inherit" />
        </button>

        {/* Modal Title */}
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-center mb-6">{title}</h1>
        
        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalSection;
