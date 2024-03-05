import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

function About() {
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "MongoDB", "Express", "Firebase"]);

  return (
    <>
      <SectionTitle title={"About me"} />
      <div className='flex flex-row sm:flex-col items-center justify-between '>
        <div className='w-1/2 px-5 sm:px-1 sm:w-full '>
          <dotlottie-player src="https://lottie.host/4d0c2437-4da5-4a41-bf74-d345c6afbf66/BaBhWWvNoy.json" background="transparent"  ></dotlottie-player>
        </div>
        <div className="flex flex-col text-white w-1/2 sm:w-full gap-5 mx-auto  ">
          <p>
            Hi there, I'm Achuth Kumar, a passionate MERN stack developer with a knack for turning ideas into dynamic web solutions. From my humble beginnings in 2022, where I dabbled with basic web pages, to now crafting full-stack websites, my journey has been nothing short of exhilarating. Specializing in MongoDB, Express.js, React, and Node.js
          </p>
          <p>
            I thrive on diving into real-time projects, bringing innovation and functionality to every endeavor. With a diverse portfolio of MERN-based projects under my belt, I'm eager to embark on new challenges and make meaningful contributions to the ever-evolving world of web development.
          </p>
        </div>
      </div>


      <div className="py-10 ">
        <h1 className="text-tertiary text-xl sm:text-lg">
          Here are a few technologies I have been working with recently:
        </h1>
        <div className="flex gap-5 flex-wrap mt-8  ">
          {skills.map((value, index) => (
            <button key={index} className="text-tertiary border-2 sm:border border-tertiary py-3 sm:py-1 px-10 sm:px-5 items-start">{value}</button>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
