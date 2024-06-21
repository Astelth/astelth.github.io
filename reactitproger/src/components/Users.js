import React from "react";
import User from "./User";

class Users extends React.Component {
    /* статичный массив
    users = [
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
    ] */
    render() {
        if (this.props.users.length > 0)
            return (
                <div>
                    {this.props.users.map((el) => (
                        <User key={el.id} user = {el} />
                    ))}
                </div>
            )
        else
            return (
                <div className='user'>
                    <h3>Пользователей нет</h3>
                </div>
            )
    }
}

export default Users;