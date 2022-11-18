import React, { Fragment } from "react";
import Card from "./Card";


const Cardlist = ({robots}) => {
    // let cardComponent = [];
    // for (let i=0; i<20; i++) {
    //     cardComponent.push(<Card id={robots[i].id} name={robots[i].fullName} email = {robots[i].email} />);

    // }
    
    // const cardArray = robots.map ( (user,i) => {
    //     return (<Card 
    //     key={`id${i}`} 
    //     id={robots[i].id} 
    //     name={robots[i].fullName} 
    //     email = {robots[i].email} 
    //     />)
    // })

    return (
        <Fragment>
            {robots.map ( (user,i) => {
                return (<Card 
                        key={`id${i}`} 
                        id={robots[i].id} 
                        name={robots[i].fullName} 
                        email = {robots[i].email} 
                        />);
               } 
               )
            }
        </Fragment>
    );

}

export default Cardlist;