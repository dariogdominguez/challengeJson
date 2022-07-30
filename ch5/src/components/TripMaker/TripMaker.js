import React, { useReducer, createContext, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import TripBuilder from '../TripBuilder/TripBuilder';
import TripSummary from '../TripSummary/TripSummary';

const useStyles = createUseStyles({
    wrapper: {
    },
});

const TripContext = createContext();
export const useTripContext = () => useContext(TripContext);

function reducer(state, item) {
    if(item === "pop") return state.slice(0, (state.length - 1));
    console.log(state)
    return state.push(item);
}

export default function TripMaker(){
    const classes = useStyles();
    const [trips, setTrips] = useReducer(reducer, []);
    return(
        <TripContext.Provider value = {{trips, setTrips}}>
        <div className={classes.wrapper}>
            <TripBuilder></TripBuilder>
            <TripSummary></TripSummary>
        </div>
        </TripContext.Provider>
    )
}