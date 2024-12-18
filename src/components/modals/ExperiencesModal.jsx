import { experiencesData } from "../../utils/localData";
import ModalSection from "./ModalSection";

function ExperiencesModal() {
  return (
    <ModalSection title="Experiences">
      {[...experiencesData].reverse().map((experience) => (
        <div key={experience.id} className="flex items-start justify-start gap-4 bg-[#FFFFFF] rounded-2xl p-4 w-full lg:w-[320px] h-fit shadow-[0_0_16px_rgba(0,0,0,0.15)]">
          <img src={experience?.logo} alt="" className="size-[80px] aspect-square rounded-lg object-contain"/>
          <div className="flex flex-col justify-start gap-1 text-start w-full">
            <h2 className="text-lg xl:text-xl">{experience?.role}</h2>
            <p className="text-xs xl:text-sm">{experience?.description}</p>
            <div className="self-end w-fit bg-color-1 rounded-md p-1">
              <p className="text-xs xl:text-sm text-end"><span>{experience?.startDate}</span> - <span>{experience?.endDate}</span></p>
            </div>
          </div>
        </div>
      ))}
    </ModalSection>
  )
}

export default ExperiencesModal;