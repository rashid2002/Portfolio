import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-signature inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi , My name is Mohd Rashid Ansari.I am a frontend developer. I have
          been working on web development for 1 year. I have worked on many
          projects. Currently I am pursuing my B.Tech in Computer Science and Engineering from
          <a href="https://www.geu.ac.in/" className="text-red-500"> Graphic Era University </a>
           Dehradun , Uttrakhand.

        </p>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          </hr>
        <br />
        



        

        <p className="text-xl">
          I am a self taught developer. I have learned web development from
          scratch. I have learned HTML , CSS , JavaScript , React , Tailwind CSS 
          and many more. 
          I am a fast learner and I am always ready to learn new things. I am
          always ready to work on new projects. 





        </p>
      </div>
    </div>
  );
};

export default About;
