import { FaBriefcase, FaClipboardList, FaTools, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-color-4 w-[90%] lg:w-[80%] max-w-[1047px] flex items-center py-5 justify-evenly rounded-lg">
      <button 
        onClick={() => navigate("/skills")}
        color="transparent"
        >
        <FaTools className="size-[25px] md:size-[30px] lg:size-[40px]" />
      </button>
      <button 
        onClick={() => navigate("/projects")}
        color="transparent"
        >
        <FaClipboardList className="size-[25px] md:size-[30px] lg:size-[40px]" />
      </button>
      <button 
        onClick={() => navigate("/experiences")}
        color="transparent"
        >
        <FaBriefcase className="size-[25px] md:size-[30px] lg:size-[40px]" />
      </button>
      <button 
        onClick={() => navigate("/profile")}
        color="transparent"
        >
        <FaUser className="size-[25px] md:size-[30px] lg:size-[40px]" />
      </button>
    </nav>
  )
}

export default Navigation;