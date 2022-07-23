import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from '../Context/UserContext';


const useStyles = createUseStyles({
    wrapper: {
        borderBottom: "black solid 1px",
        padding: [10],
        textAlign: "right",
        fontSize: "20px",
    },
    image: {
        display: "block",
        width: "100px",
        marginBottom: -20,
    }
});


export default function Header({image}) {
    const user = useContext(UserContext);
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <img className={classes.image} src={image} alt={"Logo"}/>
            Bienvenido {user.name}
        </div>
    )
}