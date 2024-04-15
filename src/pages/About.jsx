
function About() {
  const headshot = '../../public/headshot.jpg'  
  
  return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '10px'
        }}>
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
