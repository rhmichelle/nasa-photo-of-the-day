import React from 'react';
import styled from 'styled-components'

const WrapperDiv = styled.div`
    width: 75%;
    height: 100%;
    margin: 0 auto;
    padding: 2rem;
`

const PhotoInfo = (props) => {
    const { copyright, date, explanation } = props.photo;
    console.log('PhotoProps', props)
    console.log('Photo Date', props.photo.date)
    return (
        <WrapperDiv>
            <p>Copyright: {copyright}</p>
            <p>Date: {date}</p>
            <p>About: {explanation}</p>
        </WrapperDiv>
    )
}

export default PhotoInfo;