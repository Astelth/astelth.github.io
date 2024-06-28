import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";
import Image from './Image';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }
    }
    user = this.props.user;
    render() {
        return (
            <div className='user'>
                <IoCloseCircleSharp className='delete-icon' onClick={() => this.props.onDelete(this.user.id)} />
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className='edit-icon' />
                <h3 className="user-name">{this.user.first_name} {this.user.last_name}</h3>
                <p>{this.user.email}</p>
                <p><Image image={this.user.avatar} className='avatar' /></p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )
    }
}

export default User;