import { motion } from "framer-motion";
import { projectsData } from "../../utils/localData";
import ModalSection from "./ModalSection";

function ProjectsModal() {
  return (
    <ModalSection title="Projects">
      <div className="flex flex-row flex-wrap justify-start lg:justify-center gap-3 sm:gap-6 lg:gap-6 xl:gap-11 w-full overflow-y-auto p-4">
        {[...projectsData].reverse().map((project, index) => (
            <motion.div
              key={project?.id}
              className="bg-[#FFFFFF] flex flex-col gap-4 p-2 rounded-2xl w-full md:w-[280px] lg:w-[280px] xl:w-[300px] shadow-[0_0_16px_rgba(0,0,0,0.15)] group"
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
              <div className="relative overflow-hidden rounded-lg border-2 border-color-3">
                <img src={project?.thumbnail} alt="" className="w-full aspect-video object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>
              <div className="flex flex-col gap-2 text-start">
                <h2 className="text-xl sm:text-xl xl:text-2xl">{project?.title}</h2>
                <p className="text-base xl:text-lg">{project?.description}</p>
                <div className="flex justify-end gap-1">
                  {project?.technologies.map((technology, index) => (
                    <p key={index} className="bg-color-1 text-color-2 rounded-md px-2 py-1 text-sm">
                      {technology}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </ModalSection>
  );
}

export default ProjectsModal;