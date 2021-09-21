import {Spinner} from 'react-bootstrap';
import  "./Loader.css";


function LoaderComponent()
{
    console.log("LoaderComponent");
    return (
        <div className="position-fixed Loader">
            <Spinner animation="grow" variant="primary" size="lg"></Spinner>
        </div>
    )
}

export default LoaderComponent;