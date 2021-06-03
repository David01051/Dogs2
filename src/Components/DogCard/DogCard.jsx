import React from 'react'

export default function DogCard(props) {
    let color
    if(props.age<4){
        color= "red"
    }
    else{
        color = "yellow"
    }
        
    
    return (
        <div className="cards"
            style={props.age < 4 ? { backgroundColor: color } : { border: "black 5px solid" }}>
            <h2>Name : {props.name}</h2>
            <h3>Type: {props.type}</h3>
            <h3>Age: {props.age}</h3>
        </div>
    )
}
