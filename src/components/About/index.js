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
                            <div>Completed Web development course on freeCodeCamp</div>
                            <h3>2017</h3>
                            <div>Learnt <span id="ruby">Ruby On Rails</span> via Michael&nbsp;Hartl's online tutorial</div>
                            <h3>2018</h3>
                            <div>Skilled up on <span id="react">ReactJS</span> and <span id="go">Golang</span></div>
                            <h3>2019</h3>
                            <div>Experimented with <span id="mean">MEAN&nbsp;stack</span></div>
                            <h3>2020</h3>
                            <div>Uplevelling with full stack <span id="ms">ASP.Net Core</span> and <span id="ms">Entity Framework</span></div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About