import { motion } from "framer-motion";
import { experiencesData } from "../../utils/localData";
import ModalSection from "./ModalSection";

function ExperiencesModal() {
  return (
    <ModalSection title="Experiences">
      <div className="flex flex-row flex-wrap justify-between gap-3 sm:gap-6 lg:gap-6 xl:gap-10 w-full overflow-y-auto p-4">
        {[...experiencesData].reverse().map((experience, index) => (
            <motion.div
              key={experience.id}
              className="flex items-start justify-start gap-3 bg-[#FFFFFF] rounded-2xl p-4 w-full lg:w-[320px] h-fit shadow-[0_0_16px_rgba(0,0,0,0.15)]"
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img src={experience?.logo} alt="" className="size-[50px] aspect-square rounded-lg object-contain"/>
              <div className="flex flex-col justify-start gap-1 text-start w-full">
                <h2 className="text-base xl:text-lg">{experience?.role}</h2>
                <p className="text-xs xl:text-sm">{experience?.description}</p>
                <div className="self-end w-fit bg-color-1 rounded-md p-1">
                  <p className="text-xs xl:text-sm text-end"><span>{experience?.startDate}</span> - <span>{experience?.endDate}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </ModalSection>
  );
}

export default ExperiencesModal;