import '../css/footer.css';

export default function Footer() {
    return(
        <div className="footer-container">
            <h3>
                Thanks for the Visit
            </h3>   
            <ul className="footer-links">
                <li>
                    <a href="https://github.com/garrethil" target="_blank" rel="noopener noreferrer">github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/garret-hildebrandt-6887662b1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/24335262/garret-hildebrandt" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
                </li>
            </ul>
        </div>
    )
}