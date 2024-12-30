import { skillsData } from "../../utils/localData";
import ModalSection from "./ModalSection";

function SkillsModal() {
  return (
    <ModalSection title="Skills">
      <div className="flex flex-row flex-wrap justify-start lg:justify-center gap-3 sm:gap-6 lg:gap-6 xl:gap-11 w-full overflow-y-auto p-4">
        {skillsData.map((skill) => (
          <div key={skill.id} className="bg-[#FFFFFF] flex flex-row sm:flex-col items-center w-full sm:w-fit gap-4 rounded-md sm:rounded-lg lg:rounded-xl px-[32px] py-[16px] sm:px-[38px] sm:py-[16px] xl:px-[42px] xl:py-[16px]">
            <skill.icon className="size-[28px] sm:size-[32px] xl:size-[36px]" />
            <p className="text-xl sm:text-xl xl:text-2xl">{skill.name}</p>
          </div>
        ))}
      </div>
    </ModalSection>
  )
}

export default SkillsModal;