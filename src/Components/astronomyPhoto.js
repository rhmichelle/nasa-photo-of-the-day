import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoInfo from './PhotoInfo.js'


const AstronomyPhoto = props => {

    const [photo, setPhoto] = useState('')

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=YJFlE3M4RUi0LXHEKyH7icrOqQQajSXEEs9CnGfh&date=2020-08-18")
            .then((response) => {
                console.log("Response", response)
                setPhoto(response.data)
            })
            .catch((error) => {
                console.log("Error", error)
            })
    }, [])


    return (
        <div>
            <img src={photo.hdurl} alt="Astronomy Photo of the Day"></img>
            <h1>Astronomy Photo of the Day</h1>
            <PhotoInfo photo={photo}/>
        </div>
    )

}

export default AstronomyPhoto;
