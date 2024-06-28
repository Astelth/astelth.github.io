import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1";

// ReactDOM.render(<div>
//     <h1>Hello world</h1>
//     <div>привет </div>
//     </div>, document.getElementById("app")
//     );

class App extends React.Component {
    constructor(props) {
        super(props);

        axios.get(baseUrl).then((res) => {
            //console.log(res.data.data);
            this.setState({ users: res.data.data })
        })

        this.state = {
            users: []
            /*    users: [
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
                ]   */
        }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }
    render() {
        return (<div className="name">
            <Header title='Список пользователей' />
            <main>
                <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
            </main>
            <aside>
                <AddUser onAdd={this.addUser} />
            </aside>
        </div>)
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        });
    }

    editUser(user) {
        //    console.log(user);
        let allUsers = this.state.users
        allUsers[user.id - 1] = user
        this.setState({ users: [] }, () => {
            this.setState({ users: [...allUsers] })
        })
    }

    addUser(user) {
        console.log(user);
        const id = this.state.users.length + 1;
        // нумерация для нового элемента массива

        this.setState({ users: [...this.state.users, { id, ...user }] })
        // добавляет объект в массив - форма в User.js
    }
}

export default App;
