import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoInfo from './PhotoInfo.js'


const AstronomyPhoto = props => {

    const [photo, setPhoto] = useState('')

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=8cAcAkagEaja2vNbd0NHtNNSKgwia4rLBiB6RLac")
            .then((response) => {
                console.log("Response", response.data)
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
