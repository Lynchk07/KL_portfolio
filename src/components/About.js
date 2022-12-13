import React from 'react';
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';
import ProfilePic from './profilepic.png';

// function image(){
//   return(
//   <div>
//     <a href='../assets/ProfilePic.JPG'></a>
//   </div>
//   );
// }

// export default image;


function About() {
  return (
    <Card>
      <section className="my-5">
        <div className="my-2">
            <div className="profile-img my-5">
            <i className="fas fa-user-circle" style={{ fontSize: "86px" }}></i>

            <Stack direction="horizontal" className="m-2 p-3"></Stack>
                <img src={ProfilePic} className="profilePic" alt="ProfilePic"></img>
            
            </div>
          
            <p>
                I am currently employeed as a Project Manager. I am studying Full Stack Javascript Web Developer, specifically Mern Stack.
            </p>
            <p>
                I enjoy spending time with my family, dogs, and hiking. In my spare time I like to work on passion projects and code. 
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