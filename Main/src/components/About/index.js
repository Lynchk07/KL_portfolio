import React from 'react';
import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <Card>
      <section className="my-5">
        <div className="my-2">
          <div className="profile-img my-5">
          <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
          <Stack direction="horizontal"     className="m-3 p-3">
            <img src={ProfilePic} className="profilePic" alt="ProfilePic"></img>
          </Stack>
          </div>
          <p>
            I am a project manager on the sales team for National Accounts and a Full Stack Javascript Web Developer, Mern Stack.
          </p>
          <p>
            I enjoy spending time with my family,dogs, and hiking. In my spare time I like to work on passion projects and code. 
          </p>
          <p>
            Please contact me if you would like to connect.
          </p>
        </div>
      </section>
      </Card>
  );
}


export default About;