import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, web } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import '../index.css';

const isMobile = window.innerWidth < 768;
const MotionDiv = isMobile ? 'div' : motion.div;
const MotionP = isMobile ? 'p' : motion.p;

const ProjectCard = ({ index, name, description, tags, image, source_code_link, web_code_link}) => {

  return (
    <MotionDiv
    variants={!isMobile && fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github} 
                alt={github} 
                className="w-1/2 h-1/2 object-contain" 
              />
            </div>
            <div 
            onClick={() => window.open(web_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={web} 
                alt={web} 
                className="w-1/2 h-1/2 object-contain" 
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </MotionDiv>
  )
}

const Works = () => {

  return (
    <>
      <MotionDiv
        variants={!isMobile && textVariant()}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </MotionDiv>
      <div className='w-full flex'>
      <MotionP
          variants={!isMobile && fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. While most of these are passion projects, they highlight my ability to solve complex problems, work with various technologies, and manage projects effectively. 
        </MotionP>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")