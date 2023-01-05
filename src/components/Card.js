import React from "react";

// const Card = (props) => {
//     return (
//         <div className="bg-light-green dib bor3 pa3 ma2 grow bw2 shadow-5">
//             <img src= {`https://robohash.org/${props.id}?200x200`} alt="a beautiful robot"></img>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

//we can also use destructuring like this : 
const Card = ({id, name, email, roboTypeCreate}) => {
    return (
        <div className="bg-light-green dib bor3 pa3 ma2 grow bw2 shadow-5">
            <img src= {`https://robohash.org/${id}${roboTypeCreate}`} alt="a beautiful robot"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
