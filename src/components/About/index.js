import React from "react";
import './index.scss';
import TypingLetters from "../TypingLetters/index.js";

const About=()=>{
    return(
        <div className="container about-page">
            <div className="text-zone">
                <div className="details">
                    <TypingLetters/>
                    <div className="text">
                        <h2>
                            <h3>2015</h3>
                            <div>Self taught web programming basics on Codecademy</div>
                            <h3>2016</h3>
                            <div>Complete Web development course on freeCodeCamp</div>
                            <h3>2017</h3>
                            <div>Learnt RubyOnRails via Michael Hartl's online tutorial</div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About