import React from 'react';
import {object} from "joi";
import {carService} from "../../services";


const Car = ({car, setUpdateCar, setCars}) => {
    const {id,brand, price, year}=car;

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
          <button onClick={()=>{
              carService.deleteByid(id).then(async ()=>{
            const {data}=await carService.getAll();
            setCars([...data])
              }).catch(err=>console.log(err))
          }}>Delete</button>
        </div>
    );
};

export {Car};