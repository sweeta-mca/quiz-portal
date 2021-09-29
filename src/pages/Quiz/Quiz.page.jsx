import React from "react";
import Header from "../../components/Header/Header";
import Protected from "../../components/protected/protected";
import QuestionList from "../../components/Questions/QuestionList";
import { getQuestions } from "../../utils/firebase.utils";

class Quiz extends React.Component
{
    state = {
        questions:[]
    };
   
    componentDidMount()
    {
        getQuestions()
        .then((qs) => {
            console.log(qs)
            this.setState({
                questions : qs
            })
        });
    }

    render() 
    {
       
        return (        
            <Protected>
                <Header />
                <QuestionList questions = {this.state.questions} />
            </Protected>
            
        )
    }
   
}

export default Quiz;