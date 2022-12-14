import React from 'react';
// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Wtm from './project1.png';
import SU from './project3.png';
import Bab from './project2.png';
import PWG from './passwordGenerator.png';
import QU from './quizsnip.png'
import NOAPP from './noteapp.png'

function Portfolio(props) {

  return (

    <Row xs={1} md={3} className="g-4">

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={SU} />
            <Card.Body>
              <Card.Title>Sapien University</Card.Title>
              <Card.Text>
                This was a freelance project I worked on with classmates from the UW bootcamp cohort. It is a website that provides education material for people in the skin care industry.
              </Card.Text>
              <Card.Link href="https://github.com/ManuelaKenna/SapienAestheticUniversity">Git Repo</Card.Link>
              <Card.Link href="#">Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
   <Col>
          <Card>
            <Card.Img variant="top" src={Wtm} />
            <Card.Body>
              <Card.Title>Trip to Mars - Javascript App</Card.Title>
              <Card.Text>
                This App is a goal setting app. 
              </Card.Text>
              <Card.Link href="https://github.com/ManuelaKenna/trip-to-mars">Git Repo</Card.Link>
              <Card.Link href="https://manuelakenna.github.io/trip-to-mars/">Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={PWG} />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
                This app is a random password generator.
              </Card.Text>
              <Card.Link href="https://github.com/Lynchk07/PasswordGenerator">Git Repo</Card.Link>
              <Card.Link href="https://lynchk07.github.io/PasswordGenerator/">Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Bab} />
            <Card.Body>
              <Card.Title>Books and Breweries</Card.Title>
              <Card.Text>
                This was a project created during my coursework for University of Washington Coding bootcamp. This website is a place where you can search for a good book and a brewery. Future development is creating a virtual library and book club. 
              </Card.Text>
              <Card.Link href="https://github.com/zeinabhared/BooksandBreweries">Git Repo</Card.Link>
              <Card.Link href="https://booksandbreweries2022.herokuapp.com/">Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={QU} />
            <Card.Body>
              <Card.Title>Javascript Quiz App</Card.Title>
              <Card.Text>
                This was a project created during my coursework for University of Washington Coding bootcamp. This App is a javascript quiz 
              </Card.Text>
              <Card.Link href="https://github.com/Lynchk07/Javascript-Quiz_fundamentals">Git Repo</Card.Link>
              <Card.Link href="https://lynchk07.github.io/Javascript-Quiz_fundamentals/">Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={NOAPP} />
            <Card.Body>
              <Card.Title>Note Taker app</Card.Title>
              <Card.Text>
                This is an App used to take and save notes. 
              </Card.Text>
              <Card.Link href="https://github.com/Lynchk07/Note-Taker-app---Express.js">Git Repo</Card.Link>
              <Card.Link href=" https://git.heroku.com/damp-badlands-54051.git">Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    
  );
}

export default Portfolio;