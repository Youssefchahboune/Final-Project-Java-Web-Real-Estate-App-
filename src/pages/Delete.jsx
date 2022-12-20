import React from 'react';
import '../App.css';
import Banner from '../components/Banner';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const text = () => {
  
  return <p>
    Welcome to our Delete Property page! Here, you can easily remove your property from our website <br />
    by providing the property's ID and your seller security key. <br />
    Thank you for visiting!
  </p>
}

function Delete() {

  const propertyDeleted = () => toast.success("Property Deleted Succesfuly!",{
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  });

  const Error = () => toast.error("Error Occured",{
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  });

  const Unauthorized = () => toast.error("Unauthorized, key does not match property id",{
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  });


  const handleSubmit = event => {
    event.preventDefault();
    
    axios.delete("http://localhost:8081/api/properties", { data : {
      "id" : parseInt(event.target.idBox.value),
      "key" : event.target.keyBox.value
    }})
    .then((response) => {
      console.log(response);
      propertyDeleted();
    }) 
    .catch((response) => {
      console.log(response);

      if(response.response.status === 401){
        Unauthorized();
      } else {
        Error();
      }
      
    })

    event.target.idBox.value = "";
    event.target.keyBox.value = "";
    

  }

  return (
    <div>
      <Banner Title="DELETE" text={text()} />

      <div class="ml-[11%] py-5 pt-10 text-sm font-thin">
        Property Information
      </div>

      <form onSubmit={handleSubmit} class="mb-[11%]">
        <div class="mx-[11%]">
          <div  class="flex flex-row border w-[95%] h-32 gap-10 pl-10 pt-8 bg-white drop-shadow-md">
            <div class="flex flex-col">
              <label class="text-sm font-thin" htmlFor="">ID</label>
              <input name="idBox" class="border pl-2 w-[80%]" type="text" placeholder='Enter ID' required />
            </div>
            <div class="flex flex-col">
              <label class="text-sm font-thin" htmlFor="" >KEY</label>
              <input name="keyBox" class="border pl-2 w-[80%]" type="text" placeholder='Enter KEY' maxLength="6" minLength="6" required/>
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-5 ml-[11%] mt-10">
          <div>
            <button type="submit" class="px-7 py-1 bg-black text-white">Delete</button>
            <ToastContainer />
          </div>
          <div>
            <button type="reset" class="px-5 py-1 bg-[lightgray] text-white">Clear</button>
          </div>
        </div>

        
      </form>

      
    </div>
  )
}

export default Delete