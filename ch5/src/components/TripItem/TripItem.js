import React from 'react';
import { useTripContext } from "../TripMaker/TripMaker"
import { CardWrapper, CardImage, TripName, StyledImg, CardTextBody,
        CardTextWrapper, PriceContainer, StyButtonTwo } from "../Styles/Styles";

export default function TripItem({name, image, desc, price, button}) {

    const { trips, setTrips } = useTripContext()

    let obj = {
        name,
        price
    }

    const clickHandler = (obj) => {
        let contador = 0;
        console.log("lista agregada:" + contador)
        if(trips.indexOf(obj)){
            return alert("Este paquete ya esta en su lista")
        }else{
            setTrips(obj);
        }
        contador ++
    }

    return(
        <div>
        <CardWrapper>
            <CardImage>
                <StyledImg src={image}></StyledImg>
            </CardImage>
            <CardTextWrapper>
            <TripName>{name}</TripName>
            <CardTextBody>{desc}</CardTextBody>
            </CardTextWrapper>
            <PriceContainer>
            <CardTextBody>{price}</CardTextBody>
            </PriceContainer>
        </CardWrapper>
        <StyButtonTwo onClick={() => clickHandler(obj)}>{button}</StyButtonTwo>
        </div>
    )
}