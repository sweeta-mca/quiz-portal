import React from "react";

import LoaderComponent from "../components/Loader/Loader";

var LoaderContext = React.createContext(false);
LoaderContext.displayName = "Loader";

export default LoaderContext;

export class LoaderProvider extends React.Component {

    state = {
        isLoading :false
    };

    start = () => {
        this.setState({
            isLoading : true
        })
    }

    stop = () => {
        this.setState({            
            isLoading : false
        })
    }
  
    render()
    {
        var {children} = this.props;

        return (
            <LoaderContext.Provider value= {{
                start : this.start, 
                stop : this.stop
            }}>
                {children}
                {this.state.isLoading && <LoaderComponent />}
            </LoaderContext.Provider>
        )
    }
}