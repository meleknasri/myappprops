import React from 'react';
import Card from 'react-bootstrap/Card';
const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
    return (
      <Card>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Team: {team}</p>
            <p>Nationality: {nationality}</p>
            <p>Jersey Number: {jerseyNumber}</p>
            <p>Age: {age}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  Player.defaultProps = {
    name: "Lionel Messi",
    team: "Inter Miami",
    nationality: "Argentina",
    jerseyNumber: "10",
    age: "36",
    imageURL: "https://via.placeholder.com/150",
  };
  export default Player;