import React from "react";
import Header from "./components/Header";

// ReactDOM.render(<div>
//     <h1>Hello world</h1>
//     <div>привет </div>
//     </div>, document.getElementById("app")
//     );

class App extends React.Component {
    helpText = "Help text!!!";
    render() {
        return (<div classname="name">
            <Header title='Шапка сайта' />
            <Header title='Шапка сайта!!!' />
            <h1>{this.helpText}</h1>
            <input placeholder={this.helpText}
                onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.helpText === "Help text!!!" ? "Yes" : "No"}</p>
        </div>)
    }
    inputClick() { console.log('Clicked') };
    mouseOver() { console.log('Mouse over') };
}

export default App;
