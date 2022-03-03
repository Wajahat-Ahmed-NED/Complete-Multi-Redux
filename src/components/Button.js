import React from 'react'

export default function Button(props) {
    let {value,onClick}=props;
    return (
        <>
          <button onClick={onClick} className="btn btn-primary">{props.children}</button>  
        </>
    )
}
