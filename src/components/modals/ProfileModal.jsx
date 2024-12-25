import { socialMediaData } from "../../utils/localData";
import { FaFileDownload } from "react-icons/fa";
import ModalSection from "./ModalSection";

function ProfileModal() {
  return (
    <ModalSection title="About Me">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 overflow-y-auto p-4">
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <div className="w-full bg-[#FFFFFF] text-color-3 p-6 rounded-lg shadow-md text-center">
            <p className="about-me text-left text-sm sm:text-base lg:text-lg">Hi, I am a Front-End Web Developer with a passionate for creating engaging and user-friendly web experiences. In my projects, I enjoy coding and collaborating with teams to create websites that combine creativity and technology. I'm a lover of responsive web design and experiences, and I'm always trying to make the internet a more interesting place. Let's connect and together bring our creative ideas into reality in the world of websites!</p>
          </div>
          <a href="/src/assets/documents/resume.pdf" target="_blank" download rel="noopener noreferrer" className="w-fit p-1 rounded bg-white flex items-center gap-2 shadow-[0_0_16px_rgba(0,0,0,0.15)] text-color-3 hover:bg-color-3 hover:text-white transition-colors duration-300 ease-in-out">Download Resume <FaFileDownload /></a>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 justify-items-center">
          {socialMediaData.map((socialMedia) => (
            <a
              key={socialMedia.id}
              href={socialMedia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[180px] md:w-[200px] h-[120px] sm:h-[140px] flex flex-col items-center justify-center gap-2 sm:gap-4 bg-[#FFFFFF] rounded-2xl shadow-[0_0_16px_rgba(0,0,0,0.15)] text-color-3 hover:bg-color-3 hover:text-white transition-all duration-300 ease-in-out"
            >
              <socialMedia.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              <p className="text-sm sm:text-base lg:text-xl font-medium text-center">
                  {socialMedia?.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </ModalSection>
  );
}

export default ProfileModal;
