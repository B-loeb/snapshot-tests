import React from "react"
import Card from "react-bootstrap/Card"
import Bsl_Styled from "./Bsl_Styled.png"

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>

        <Card.Img variant="top" src={Bsl_Styled} />
    
        <Card.Body>
            <Card.Title>Mickey Mouse</Card.Title>
            <Card.Text>
            I am graphic designer looking to expand into more coding.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard