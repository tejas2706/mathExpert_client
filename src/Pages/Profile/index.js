import React from 'react'
import { Avatar } from '@material-ui/core';
import './styles.css';

function Profile() {

    const student = {
        "imgUrl":"",
        "name": "kiddo kidzene",
        "standard": "3",
        "emailId": "kiddo.kidzene@gmail.com",
        "starsEarned": "25"
    }

    return (
        <div className="profile__container">
            <div className="profile__innerContainer">
                <div className="profile__image">
                    {
                        student.img ?
                        <img src={student.imgUrl}></img>:
                        <Avatar style={{width: "200px", height: "200px"}} />
                    }
                </div>
                <div className="profile__stars">🌠{student.starsEarned}</div>
                <div className="profile__name">{student.name}</div>
                <div className="profile__emailId">{student.emailId}</div>
                <div className="profile__standard">Class: {student.standard}</div>
            </div>
        </div>
    )
}

export default Profile
