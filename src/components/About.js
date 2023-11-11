import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      props.bio && <p>{props.bio}</p>
      props.github && <p>Github: {props.github}</p>
      props.linkedin && <p>LinkedIn: {props.linkedin}</p>
    </div>
  );
}

export default About;
