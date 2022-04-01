import React from 'react'
console.log("Render Welcome");
// another way to write component
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello iam Welcome componenet</h2>
                <h3>I Created by React.Component</h3>
                <hr></hr>
            </div>
        )

    }
}
export default Welcome