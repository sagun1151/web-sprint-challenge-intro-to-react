// Write your Character component here
import React, { useState } from "react";
import axios from 'axios'
import styled from 'styled-components'


const StyledAll = styled.div`
    display:flex;
    flex-direction: column;
    padding:5px;
    align-items: center;
    width:50%;
    border: 2px solid black;
 `
 const StyledDiv = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:60%;
`
 
 const StyledName = styled.h2`
    color: #02D12A;
    font-size: 30px;
    text-shadow: 1px 1px 5px #fff;
`

const StyledButton = styled.button`
    padding:7px;
    color:#7C77F4;
    background-color:#181818;
`

const StyledUl = styled.ul`
    border: 2px solid black;
    padding: 8px 73px;
`

const StyledLi = styled.li`
    color:#00C6B5;
    font-size:30px;
    text-shadow: 1px 1px 5px #fff;
`

const Characters = (props) => {
    const {data} = props;
    const[show, setShow] = useState(false);

    const toggle = ()=> {
        setShow(!show);
    }

    return (
        <StyledAll>
            <StyledDiv>
            <StyledName>{data.name}</StyledName>
            <StyledButton onClick={toggle}>Details</StyledButton>
            </StyledDiv>
            { show?
            <StyledUl>
                <StyledLi>Height: {data.height}</StyledLi>
                <StyledLi>Mass: {data.mass}</StyledLi>
                <StyledLi>Hair color: {data.hair_color}</StyledLi>
                <StyledLi>Skin color: {data.skin_color}</StyledLi>
            </StyledUl>:null
            }

        </StyledAll>    

    )
}

export default Characters; 