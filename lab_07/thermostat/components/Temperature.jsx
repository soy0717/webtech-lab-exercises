import React from 'react';
import Label from './Label.jsx'

function Temperature(props) {
    return <h2> <Label value={props.celsius} unit='C' /> = <Label value={props.faren} unit='F' /> </h2> ;
}

export default Temperature;