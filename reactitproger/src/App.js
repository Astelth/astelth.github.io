import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";

// ReactDOM.render(<div>
//     <h1>Hello world</h1>
//     <div>привет </div>
//     </div>, document.getElementById("app")
//     );

class App extends React.Component {

    render() {
        return (<div className="name">
            <Header title='Список пользователей' />
            <main>
                <Users />
            </main>
            <aside></aside>
        </div>)
    }
}

export default App;
