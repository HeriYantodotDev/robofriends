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

    if (!robots.length) {
        return (
            <div>
                <h1 className="tc system-sans-serif">No Robots🤖!!!</h1>
                <p className="tc system-sans-serif">🔢 Input Number of Robots / ⌨️ Type the names correctly</p>
            </div>
        )
    } else {
        return (
            <Fragment>
                {robots.map ( (user,i) => {
                    return (<Card 
                            key={`id${i}`} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email = {robots[i].email} 
                            />);
                   } 
                   )
                }
            </Fragment>
        );
    }
    

}

export default Cardlist;