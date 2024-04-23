import '../css/contact.css';

function Contact() {
    return (

      
        <form className="container">
            <h3>
                Reach Out with any Questions or Opportunities
            </h3>
            <div className="contact">
            <div className="m-2 p-2">
                <label htmlFor="name">Name:</label>
                </div>
                <div className='inputField'>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </div>
            <div className="m-2 p-2">
            <div>
                <label htmlFor="email">Email:</label>
            </div>
            <div className='inputField'>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            </div>
            <div className="m-2 p-2">
                <div>
                <label htmlFor="message">Message:</label>

                </div>
                <div className='inputField'>
                <textarea
                    id="message"
                    name="message"
                    required
                />
                </div>
                
            </div >
            <button type="submit" className="m-2 p-2">Submit</button>
            </div>
            
        </form>
    );
}

export default Contact;
