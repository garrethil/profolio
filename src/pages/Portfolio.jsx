import projectData from '../assets/data';
import Project from '../components/Project';
import '../css/portfolio.css'

export default function Portfolio() {
    return (
      <div className="container">
      <div className="row">
          {projectData.map((project, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4 my-3" key={index}>
                  <Project image={project.image} title={project.title} desc={project.desc} repo={project.repo} link={project.link} />
              </div>
          ))}
      </div>
  </div>


    );
  }