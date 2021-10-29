import React from 'react';

function About(props) {
  return (
    <div>
      <h1>ini halaman about</h1>
      {props.children}
    </div>
  );
}

export default About;
