import React from "react";
import { useState } from 'react';
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
            <h1>Contact Me</h1>
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form>
                    <label>
                        Message:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact