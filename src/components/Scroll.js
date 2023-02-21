import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '1px solid yellow', height: 'calc(100vh - 220px)'}}>
            {props.children}
        </div>
    )

}
// 
export default Scroll;