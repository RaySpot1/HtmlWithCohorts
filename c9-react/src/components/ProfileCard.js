import React, { useState } from 'react'
import image from "../assets/logo.svg"
import "./ProfileCard.css"


const ProfileCard = (props) => {
    let { username, hobby } = props

    //     data  updateData
    //       ^       ^
    const [state, setState] = useState({username: username, hobby: hobby})  //destructuring

    const handleclick = () => {
        let newObject = {username: `Mr ${username}`, hobby: `My ${hobby}`}
        setState({ ...state, ...newObject }) //spreading the values
    }

   

    return (
        <div className="profile-card">
            <img src={image} alt="profile card" className="profile-card-avatar" />
            <div className="details-container">
                <div className="firstname-details">
                    <p>Name</p>  
                    <h1>{state.username}</h1> 
                </div>

                <div className="hobby-details">
                    <p>Hobby</p>
                    <h1>{state.hobby}</h1>
                </div>
            </div>
            <button onClick = {handleclick}>Click me</button>
        </div>
    )
}

export default ProfileCard

// let state
// const setState = (parameter) => {
//     state = parameter
// }

// const useState = (parameter) => {
//     state = parameter

//     return [state, setState]
// }

// let data = useState(5)
// let [state, setState] = useState(5)





//state and setstate are just variable names, anything can be used


//props{ Used to pass data from mother component to child component}

// State represent condition(Data) of a compomemt

//State management: means Creating, Retrieving, Updating data

