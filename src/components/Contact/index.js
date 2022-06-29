import React from 'react';
import ContactLetters from '../ContactLetters/index.js'
// import { useState } from 'react';
import './index.scss';


const Contact=()=>{
    // this.state = {
    //     value: 'Please write your message here.'
    // };

    // const [value, setValue] = useState('Please write your message here.')

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // }

    // const handleSubmit = (event) => {
    //     alert('A message was submitted');
    //     event.preventDefault();
    // }

    return(
        <div className="container contact-page">
            <div className="text-zone">
                <div className="details">
                    <ContactLetters/>
                    <div className="form-block">
                        <form>
                            <div>
                                <label>
                                    Name : &nbsp;
                                    <input className="contact-text" type="text" name="name" width="290"/>
                                </label>
                                <label>
                                    Email : &nbsp;
                                    <input className="contact-text" type="text" name="email" width="300"/>
                                </label>
                                <label>
                                    Message : &nbsp;
                                    <textarea id="textarea" rows="8" cols="50"/>
                                </label>
                            </div>
                            <input className="flat-button" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact