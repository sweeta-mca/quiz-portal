import { Breadcrumb, Card, Form, FormCheck,Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Question({question,options=[],idx}) {
    return (
       <Breadcrumb listProps={{
           className:'flex-column'
       }}>
            <Card>
                <CardHeader><span style={{fontWeight:"bold"}}>Question {`${idx+1}`} : </span> {question}</CardHeader>
                <Card.Body>
                    <Card.Text>
                        <Form>
                        {options.map((option,oidx)=>{
                                  return (
                                      <FormCheck 
                                      type="radio"
                                      label={option}
                                      id={`${idx}${oidx}`}
                                      name={`question${idx}`} />
                                  )  
                            })
                        }
                        
                        </Form>
                        <div className="d-flex justify-content-end">
                        <   Button variant="primary">Next</Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>  
       </Breadcrumb>
    );
}

export default Question;