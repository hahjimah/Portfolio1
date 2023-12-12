import React from "react";
import { experienceText } from "../constants";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience__inner">
        <h2 className="experience__title">
          Experiences<em>my experiences</em>
        </h2>
        <div className="experience__desc">
          {experienceText.map((exp, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{exp.title}</h3>
              <p>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

// import React from "react";
// import { skillText } from "../constants";

// const Skill = () => {
//   return (
//     <section id="skill">
//       <div className="slkll__inner">
//         <h2 className="skill__title">
//           challenge <em>My Inspirations</em>
//         </h2>
//         <div className="skill__desc">
//           {skillText.map((skill, key) => (
//             <div key={key}>
//               <span>{key + 1}.</span>
//               <h3>{skill.title}</h3>
//               <p>{skill.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skill;
