import React from 'react';
import '../App.css';
import Banner from '../components/Banner';
import PropertyCard from '../components/PropertyCard';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Properties() {
  
  const [properties,setProperties] = useState([]);

  

  const text = () => {
    return <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit nesciunt, doloremque <br />
      corrupti, itaque alias sed, fugiat aliquid reprehenderit consectetur esse <br />
      possimus cum tempora soluta error eaque aut deleniti. Ab?
    </p>
  }

  const loadTodosFromAPI = ()=>{
    axios.get("http://localhost:8081/api/properties")
    .then((response) => {
        setProperties(response.data);
    })
    .catch((response) => {
      console.log(response);
    })
  }
  
  useEffect(loadTodosFromAPI);

  return (
    <div>
      <Banner Title="PROPERTIES" text={text()} />

      {properties.length === 0? 

        <div class="text-center py-[12%] text-2xl opacity-25">Empty</div>

      : 
        <div class="flex flex-wrap px-9 py-12 gap-5">
          {properties.map((property) => {
            return <PropertyCard property={property} />
          })}
        </div>
      }

    </div>
  )
}

export default Properties