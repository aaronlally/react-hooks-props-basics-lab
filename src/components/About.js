import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.aboutBio ? <p>{props.aboutBio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
          <a href={props.gitHub}>{props.gitHub}</a>
          <a href={props.linkedIn}>{props.linkedIn}</a>
          {console.log(props.gitHub)}
    </div>
    )
}

export default About;
