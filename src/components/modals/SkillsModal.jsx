import { IoClose } from "react-icons/io5";
import { skillsData } from "../../utils/localData";
import { useNavigate } from "react-router-dom";

function SkillsModal() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[90] justify-center items-center w-full sm:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-30"></div>
        <div className="relative flex justify-center w-full h-full max-w-7xl max-h-[80%] p-4">
          <div className="relative w-full p-4 sm:p-10 lg:p-16 xl:p-24 mb-[1rem] rounded-lg bg-color-1 text-center flex flex-col items-center justify-start gap-y-6">
            <button 
              onClick={() => navigate("/")}
              className="absolute top-2 right-2 text-color-3 bg-transparent hover:bg-color-3 hover:text-color-4 rounded-full border-2 border-color-3 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
              <IoClose className="size-6 text-inherit" />
            </button>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">Skills</h1>
            <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-6 lg:gap-11 w-full overflow-y-auto">
              {skillsData.map((skill) => (
                <div key={skill.id} className="bg-[#FFFFFF] flex flex-row sm:flex-col items-center w-full sm:w-fit gap-4 rounded-md sm:rounded-lg lg:rounded-xl px-[32px] py-[16px] sm:px-[38px] sm:py-[16px] xl:px-[42px] xl:py-[16px]">
                  <skill.icon className="size-[28px] sm:size-[32px] xl:size-[36px]" />
                  <p className="text-xl sm:text-xl xl:text-2xl">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillsModal;