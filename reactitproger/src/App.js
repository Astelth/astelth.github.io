import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

// ReactDOM.render(<div>
//     <h1>Hello world</h1>
//     <div>привет </div>
//     </div>, document.getElementById("app")
//     );

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Marley',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel error rem aperiam reiciendis, aut doloribus dignissimos cumque incidunt possimus inventore. A quaerat repellendus mollitia sint.',
                    age: 40,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel error rem aperiam reiciendis, aut doloribus dignissimos cumque incidunt possimus inventore. A quaerat repellendus mollitia sint.',
                    age: 22,
                    isHappy: false
                },
                {
                    id: 3,
                    firstname: 'Lisbet',
                    lastname: 'Smit',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quaerat repellendus mollitia sint.',
                    age: 25,
                    isHappy: true
                }
            ]
        }
        this.addUser = this.addUser.bind(this);
    }
    render() {
        return (<div className="name">
            <Header title='Список пользователей' />
            <main>
                <Users users={this.state.users} />
            </main>
            <aside>
                <AddUser onAdd={this.addUser} />
            </aside>
        </div>)
    }

    addUser(user) {
        console.log(user);
        const id = this.state.users.length + 1;

        this.setState({ users: [...this.state.users, { id, ...user }] })
    }
}

export default App;
