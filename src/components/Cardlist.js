import React, { Fragment } from "react";
import Card from "./Card";


const Cardlist = ({robots, roboTypeCreate}) => {
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
                <h1 className="tc system-sans-serif">No Robots<span role={'img'} aria-label={'Robot'}>🤖</span>!!!</h1>
                <p className="tc system-sans-serif"><span role={'img'} aria-label={'number'}>🔢</span> Input Number of Robots / <span role={'img'} aria-label={'keyboard'}>⌨️</span> Type the names correctly</p>
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
                            roboTypeCreate={roboTypeCreate} 
                            />);
                   } 
                   )
                }
            </Fragment>
        );
    }
    

}

export default Cardlist;