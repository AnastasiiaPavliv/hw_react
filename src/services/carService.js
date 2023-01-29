import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService={
    getAll:()=>axiosService.get(urls.cars),
    create:(newCar)=> axiosService.post(urls.cars,newCar),
    updateByid:(id,data)=>axiosService.put(`${urls.cars}/${id}`, data),
    deleteByid:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}
export {carService}