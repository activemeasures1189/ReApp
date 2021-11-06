import React from "react";

function Garage(){
    const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 2, brand: 'Audi'}
    ]
    const carNames = cars.map((car)=>car.brand)
    const carId = cars.map((car)=>car.id)
    return(
        <ul>
        <li><h1 key={carId}>brand={carNames}</h1></li>
        </ul>
    )

}

export default Garage