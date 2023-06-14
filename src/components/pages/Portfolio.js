// import React from 'react';

// import projects from '../';

// import '../../style/Portfolio.css';


// export default function Portfolio() {
    
    
        
//     return (
        
        
        
//         <div className='pageWrapper'>
//             <h1>Portfolio</h1>
                
//             <div className='projectGrid'>
//             {projects.map((project) => {

//             {project.id}
//             {project.title}
//             {project.screenshot}
//             {project.alt}
//             {project.repoLink}
//             {project.deployedLink}
//             {project.desc}

//             </div>




//         </div>
//     )
//     })}

    
// }

import React from 'react';
import projects from '../Project';
import '../../style/Portfolio.css';
import { FiGithub } from 'react-icons/fi';
export default function Portfolio() {
  return (
    <div className='pageWrapper'>
      <h1>Portfolio</h1>
      
      <div className='projectContainer'>
        {projects.map((project) => (
          <div key={project.id}>
            
            <div className='projectCard'>
            <h2>{project.title}</h2>
            <img className='projectImg' src={project.screenshot} alt={project.alt} />
            <p className='descText'>{project.desc}</p>
            
            <div className='linksWrap'>    
            <a target ='_blank' rel='noreferrer' href={project.repoLink}>
            <FiGithub />Repo</a>

            <a target ='_blank' rel='noreferrer' href={project.deployedLink}>
                Deployed App</a>
            </div>
          </div>
          </div>

        ))}
      </div>
    </div>
  );
}
