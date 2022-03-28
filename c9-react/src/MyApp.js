// rafce

import React from 'react'
import "./MyApp.css"
import ProfileCard from "./components/ProfileCard"

const MyApp = () => {
  return (

    <div className = "myapp-container">
        <ProfileCard username="David" hobby="sleeping"/>
        <ProfileCard username="Oludare" hobby="games"/>
    </div>
  )
}

export default MyApp
