import React, { useContext } from 'react';
import { BottomContainer } from "../Styles/Styles";
import { useTripContext } from "../TripMaker/TripMaker"

export default function TripSummary() {
    const { trips } = useTripContext()
    const lista = [...trips];

    return(
        <BottomContainer>
        <h2>Tus Viajes: </h2>
        <ul >
            {lista.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
        </BottomContainer>
    )
}