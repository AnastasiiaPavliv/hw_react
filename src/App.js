import {useEffect, useState} from "react";

const App = () => {
    const [lauches, setLauchets]=useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/').then(resp => resp.json()).then(resp => setLauchets(resp))
    })
  return (
      <div>
          {lauches.filter(item => item.launch_year !== "2020").map(item =>{
              return(<div>

                  <div>flight_number:{item.flight_number}</div>
              <div>mission_name:{item.mission_name}</div>
              <div>launch_year:{item.launch_year}</div>
                      <hr/>
                  </div>
              )
          })}
      </div>
  );
};

export  {App};
