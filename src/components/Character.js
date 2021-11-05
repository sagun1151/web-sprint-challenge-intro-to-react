// Write your Character component here
import React, { useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

const Characters = (props) => {
    const {data} = props;
    console.log('33',data)
    return (
        <div>
            <h2>{data.name}</h2>
        </div>    

    )
}

export default Characters; 