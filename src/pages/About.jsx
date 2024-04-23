
import '../css/about.css';

function About() {
  const headshot = 'project-images/headshot.jpg'  
  
  return (
        <div className="container" id='box'>
            <img
                src={headshot}
                alt="Profile Picture"
                style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }}
            />
            <h2 style={{ marginTop: '20px' }}>Garret Hildebrandt</h2>
            <p style={{ textAlign: 'center' }}>
           Garret is a Full-Stack Web Developer that draws on creative elements from an education in music to provide a unique perspective in app development and solutions. He Earned a Full-Stack Web Development Certificate from the University of Toronto following a bachelors of music from the UofT. Passionate problem solver and collaborator seeking an up pace environment for continued learning and growth as a web developer.
            </p>
        </div>
    );
}

export default About;
