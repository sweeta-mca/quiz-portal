import { Container, Row,Col} from "react-bootstrap";
import Question from "./Question";

function QuestionList({questions}) {
 return (
     <Container fluid  style={{
         width:"70vw",
         paddingTop:"30px"
         }}>
         <Row>
             <Col>
         {
            questions.map((question, idx) => <Question {...question} idx ={idx} />)
        } 
            </Col>
        </Row>
                      
    </Container>
 );
     
}

export default QuestionList;