import '../css/resume.css';

export default function Resume() {
   const resume = '../../public/garret-hil-2024.pdf'; 
  
  return (
      <div className="resumeContainer">
        <div className="my-3">
        <h2>Dowload My Resume</h2>
      <a className='resumeDownload' href={resume} download="garret-hildebrandt.pdf">
        Click here to download a pdf of my resume
      </a>
        </div>

        <div className="skills my-3"> 
<h2 className="my-2">
  Technical Skills
</h2>

    <ul className="">
      <li>
      Languages: HTML/CSS, JavaScript, SQL, MongoDB
      </li>
      <li>
      Frameworks: Node, Express, Handlebars
      </li>
      <li>
      Developer Tools: Github, MySQL
      </li>
      <li>
      Libraries: jQuery, Bootstrap, Sequilize, React, Mongoose
      </li>
    </ul>


      </div>
    </div>
    );
  }