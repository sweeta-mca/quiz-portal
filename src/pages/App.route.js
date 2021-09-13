import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Quiz from './Quiz';
import Result from './Result';
import Signup from './Signup';

function AppRoutes(){
    return(
        <Router>
            <Switch>
                
                <Route exact path='/' render={()=>{
                    return <Redirect to='/quiz' />
                }}></Route>
                <Route path='/quiz' component={Quiz}></Route>
                <Route path='/result' component={Result} ></Route> 
                <Route path='/signup' component={Signup}></Route>
            </Switch>
        </Router>
    );
}

export default AppRoutes;

