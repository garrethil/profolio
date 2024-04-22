import PropTypes from 'prop-types';

function Project({ title, image, alt, desc, repo, link }) {

    return (
        <div className='project-card'>
            <h3>{title}</h3>
            <img src={image} alt={alt} />
            <div className='hidden-info'>
                <p>{desc}</p>
                <a href={repo} target="_blank" rel="noopener noreferrer">Repository</a>
                <a href={link} target="_blank" rel="noopener noreferrer">Project Link</a>
            </div>
        </div>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,

};
  
  export default Project;