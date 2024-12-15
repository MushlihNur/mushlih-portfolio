import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ModalSection({ title, children }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[90] justify-center items-center w-full sm:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-30"></div>
        <div className="relative flex justify-center w-full h-full max-w-7xl max-h-[80%] p-4">
          <div className="relative w-full p-4 sm:p-6 md:p-6 lg:py-12 lg:px-8 xl:p-20 mb-[1rem] rounded-lg bg-color-1 text-center flex flex-col items-center justify-start gap-y-6">
            <button 
              onClick={() => navigate("/")}
              className="absolute top-2 right-2 text-color-3 bg-transparent hover:bg-color-3 hover:text-color-4 rounded-full border-2 border-color-3 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center focus:bg-color-3 focus-within:text-color-4">
              <IoClose className="size-6 text-inherit" />
            </button>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">{title}</h1>
            <div className="flex flex-row flex-wrap justify-start lg:justify-center gap-3 sm:gap-6 lg:gap-6 xl:gap-11 w-full overflow-y-auto p-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalSection;