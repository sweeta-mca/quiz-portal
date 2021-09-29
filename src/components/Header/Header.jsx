import { Container, Navbar ,Button} from "react-bootstrap";
import UserContext from "../../context/user.context";

function Header()
{
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="d-flex align-items-center">
                <UserContext.Consumer>
                    {({user}) => <span className="text-white">Signed in as {user.name}</span>}
                     
                </UserContext.Consumer>
                
                <Button className="btn btn-primary ml-3">Log out</Button>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Header;