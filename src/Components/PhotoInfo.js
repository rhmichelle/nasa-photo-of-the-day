import React from 'react';

const PhotoInfo = (props) => {
    const { copyright, date, explanation } = props.photo;
    console.log('PhotoProps', props)
    console.log('Photo Date', props.photo.date)
    return (
        <div>
            <p>Copyright: {copyright}</p>
            <p>Date: {date}</p>
            <p>About: {explanation}</p>
        </div>
    )
}

export default PhotoInfo;