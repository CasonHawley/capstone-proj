import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h2>&lt;Get in touch<span className="slash">/</span>&gt;</h2>
            <form class="" action="#" method="post">
                <fieldset>
                    <input type="text" name="user-name" placeholder="Name"/>
                    <input type="email" name="user-email" placeholder="Email"/>
                    
                </fieldset>
                <button class="btn">Send</button>
            </form>
        </div>
    );
}

export default Contact;