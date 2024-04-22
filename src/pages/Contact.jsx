

function Contact() {
    return (
        <form className="container">
            <div className="contact">
            <div className="m-2 p-2">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </div>
            <div className="m-2 p-2">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className="m-2 p-2">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    required
                />
            </div >
            <button type="submit" className="m-2 p-2">Submit</button>
            </div>
            
        </form>
    );
}

export default Contact;
