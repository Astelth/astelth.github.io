import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Logo from "./img/logo.png"

// ReactDOM.render(<div>
//     <h1>Hello world</h1>
//     <div>привет </div>
//     </div>, document.getElementById("app")
//     );

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: 'Help text!!!',
            userData: ''
        }

        this.inputClick = this.inputClick.bind(this)
    }

    render() {
        return (<div classname="name">
            <Header title='Шапка сайта' />
            <Header title='Шапка сайта!!!' />
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText}
                onChange={event => this.setState({ userData: event.target.value })}
                onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.state.helpText === "Help text!!!" ? "Yes" : "No"}</p>
            <Image image={Logo} />
        </div>)
    }
    inputClick() {
        console.log('Clicked');
        this.setState({ helpText: 'Changed' })
        //this.state.helpText === this.state.helpTextDefault ? this.state.helpText = 'Changed' : this.state.helpText = this.state.helpTextDefault;
    };
    mouseOver() { console.log('Mouse over') };
}

export default App;
