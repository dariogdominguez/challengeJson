import React, { useContext } from 'react';
import { StyButton, ButtonContainer } from '../Styles/Styles';


export default function CancelButton ({ onClick }){
    return(
        <ButtonContainer>
        <StyButton onClick ={onClick}>Cancel</StyButton>
        </ButtonContainer>
    )
}