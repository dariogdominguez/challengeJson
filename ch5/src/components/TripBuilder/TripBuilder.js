import React from "react";
import TripItem  from "../TripItem/TripItem";
import { MainWrapper, WrapperTwo, CardContainer } from "../Styles/Styles";
import CancelButton from '../CancelButton/CancelButton';
import { useTripContext } from "../TripMaker/TripMaker"


const paquetes = [
    {
        image: "img01.jpg", 
        name: "Perito Moreno",
        description: "Paseo por el glaciar Perito Moreno",
        price: "$ 30.000 ars",
        button: "Promo"

    },
    {
        image: "img02.jpg", 
        name: "Brasil",
        description: "Tour por las mejores playas del norte de Brasil",
        price: "$ 50.000 ars",
        button: "Reserva"


    },
    {
        image: "img03.jpg", 
        name: "Patagonia",
        description: "Avistamiento de pinguinos en la patagonia Argentina",
        price: "$ 90.000 ars",
        button: "Comprar"

    }
];
let cancel = true;


export default function TripBuilder (){
    const { trips, setTrips } = useTripContext();

    const clickHandler = () => {
        console.log("se ejecuto")
        let lista = [...trips];

        if(lista.length > 0){
            if(cancel){
            setTrips("pop");
            cancel = false;
            }else return alert("Solo puede eliminar el ultimo item de su lista")
        }else{
            return alert("La lista esta vacia")
        }
    }

    return (
        <MainWrapper>
            <CancelButton onClick={clickHandler}/>
            <CardContainer>
            <WrapperTwo>
            {paquetes.map((trips) => (
                <TripItem
                    key={trips.name}
                    image={__dirname + "images/" + trips.image}
                    name={trips.name} desc ={trips.description}
                    price ={trips.price} button={trips.button}
                />
            ))}
            </WrapperTwo>
            </CardContainer>
        </MainWrapper>
    )
}