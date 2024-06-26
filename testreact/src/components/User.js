import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
    user = this.props.user;
    render() {
        return (
            <div className='user'>
                <IoCloseCircleSharp className='delete-icon' />
                <IoHammerSharp className='edit-icon' />
                <h3 className="user-name">{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
            </div>
        )
    }
}

export default User;