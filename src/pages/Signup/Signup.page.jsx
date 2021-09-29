import { Card, Col, Container, Row,Button } from "react-bootstrap";
import { Redirect } from "react-router";
import UserContext from "../../context/user.context";
 

function Signup() {
    return (
        <UserContext.Consumer>
            {
               ({user,signup}) => user.isLoggedIn ? (<Redirect to="/quiz"  /> 
               ): (
               <div>
                  <Container>
                      <Row className="justify-content-center mt-4" >
                          <Col md={4}>
                              <Card className="p-4">
                                  <Card.Body className="text-center">
                                      <Card.Title>Sign In with Google</Card.Title>
                                      <Button variant="primary" onClick={signup}>Sign Up</Button>
                                  </Card.Body>
                              </Card>
                          </Col>
                      </Row>
                  </Container>
                </div>
               )
            }
        </UserContext.Consumer>
        
    )
}

export default Signup;

