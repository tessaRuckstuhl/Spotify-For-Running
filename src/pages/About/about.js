import React from 'react';

function About() {
  return (
    <div className="text-center font-londrinaSolid text-xl font-light">
      Hey, are you new here?
      <br />
      Contact{' '}
      <a
        href="mailto:tessa.ruckstuhl@web.de"
        className="font-bold hover:underline"
      >
        me
      </a>{' '}
      for questions
    </div>
  );
}

export default About;
