import { projectsData } from "../../utils/localData";
import ModalSection from "./ModalSection";

function ProjectsModal() {
  return (
    <ModalSection title="Projects">
      <div className="flex flex-row flex-wrap justify-start lg:justify-center gap-3 sm:gap-6 lg:gap-6 xl:gap-11 w-full overflow-y-auto p-4">
        {[...projectsData].reverse().map((project) => (
          <div key={project?.id} className="bg-[#FFFFFF] flex flex-col gap-4 p-2 rounded-2xl w-full md:w-[280px] lg:w-[280px] xl:w-[300px] shadow-[0_0_16px_rgba(0,0,0,0.15)]">
            <img src={project?.thumbnail} alt="" className="w-full aspect-video object-cover rounded-lg border-2 border-color-3" />
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
          </div>
        ))}
      </div>
    </ModalSection>
  )
}

export default ProjectsModal;