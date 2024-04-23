
function About() {
  const headshot = 'project-images/headshot.jpg'  
  
  return (
        <div className="container">
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
                Garret is a software developer with over 10 years of experience in building applications. 
                He loves to share his knowledge and contribute to open source projects.
            </p>
        </div>
    );
}

export default About;
