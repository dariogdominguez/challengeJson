import React, { useContext } from 'react';
import { BottomContainer } from "../Styles/Styles";
import { useTripContext } from "../TripMaker/TripMaker"

export default function TripSummary() {
    const { trips } = useTripContext()
    const lista = trips;
    console.log("la lista es : " + lista)

    return(
        <BottomContainer>
        <h2>Tus Viajes: </h2>
        <ul >
            {/* {lista.map( e  => (
                <li key={e.name}>{e.name + "  $"+ e.price }</li>
            ))} */}
        </ul>
        </BottomContainer>
    )
}