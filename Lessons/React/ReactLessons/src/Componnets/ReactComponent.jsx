import React from 'react'

class ReactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "world", count: 1 };
    }
    componentWillMount() {
        console.log("ReactComponent: componentWillMount");
    }
    componentWillUnmount(){
        console.log("ReactComponent: componentWillUnmount");
    }
    componentDidMount() {
        console.log("ReactComponent: componentDidMount");
    }
    componentWillUpdate(){
        console.log("ReactComponent: componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("ReactComponent: componentDidUpdate");
    }
    changeState = () => {
        let nextCount =  this.state.count + 1;
        this.setState({hello: "world changed", count: nextCount})
    }
    render(){
        return( 
            
            <div>
                <h3>ReactComponent</h3>
                <h4>ReactComponent: state.hello= Hello {this.state.hello} Changes: {this.state.count}</h4>
                <button onClick={this.changeState}>Press Here to change state</button><span>You should see willUpdate , and didUpdate events in the console log</span>
            </div>
    
        );
    }
    
}

export default ReactComponent