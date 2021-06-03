import React from 'react'
import DogCard from '../../Components/DogCard/DogCard'



export default function Home() {
    const dogArr = [
        { name: "Marly", type: "Amstaff", age: "4" },
        { name: "Chapo", type: "Pitbull", age: "9" },
        { name: "Escobar", type: "Belgi", age: "3" },
        { name: "Chiro", type: "Akita", age: "12" }
    ]
    const dogs = dogArr.map((index, i) => {
        return (<DogCard
            key={i}
            name={index.name}
            type={index.type}
            age={index.age} />)
    });
    return (
        <div className="container">
            {dogs}
        </div>
    )
}