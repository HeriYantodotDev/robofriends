import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor () {
        //constructor (props) - super (props) -> this is to allow access to this.props in the constructor
        super ();
        this.state = {hasError:false}
    }

    componentDidCatch (error,info) {
        this.setState({hasError: true})
    }

    render () {
        if (this.state.hasError) {
            return <h1>Ooops. That's an error. But this is intentional. lol </h1>
        }
        return this.props.children;
    }
}



export default ErrorBoundry