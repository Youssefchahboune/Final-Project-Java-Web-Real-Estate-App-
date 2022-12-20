import React from 'react';
import '../App.css';
import Banner from '../components/Banner';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const text = () => {
  
  return <p>
    Welcome to our Update Property page! Here, you can easily update the status of your property, whether it's sold or available. <br />
    To do so, simply provide the property's ID and your seller security key. This page is only for property owners <br />
    who have already listed their properties on our website. <br />
    Thank you for visiting!
  </p>
}

function Update() {

  const propertyUpdated = () => toast.success("Property Updated Succesfuly!",{
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

    axios.patch("http://localhost:8081/api/properties",{
      "id" : parseInt(event.target.idBox.value),
      "key": event.target.keyBox.value,
      "status": event.target.statusBox.value
    })
    .then((response) => {
      console.log(response);
      propertyUpdated();
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
      <Banner Title="UPDATE" text={text()} />

      <div class="ml-[10.5%] py-5 pt-10 text-sm font-thin">
        Property Information
      </div>

      <form onSubmit={handleSubmit} class="mb-[10%]">
        <div class=" mx-[10.5%]">
          <div  class="border w-[95%] h-[150px] gap-20 pl-10 pt-5 bg-white drop-shadow-md">
            
            <div class="flex flex-row gap-10">

              <div class="flex flex-col">
                <label class="text-sm font-thin" htmlFor="">ID</label>
                <input name="idBox" class="border pl-2 w-[80%]" type="text" placeholder='Enter ID' required />
              </div>
              <div class="flex flex-col">
                <label class="text-sm font-thin" htmlFor="" >KEY</label>
                <input name="keyBox" class="border pl-2 w-[80%]" type="text" placeholder='Enter KEY' maxlength="6" minlength="6" required />
              </div>

            </div>

            <div class="flex flex-row">
              
              <div class="flex flex-col mt-2">
                <label class="text-sm font-thin" htmlFor="status" >Status</label>
                <select name="statusBox" class="border w-36 text-sm font-thin">
                  <option value="none">Select Status</option>
                  <option value="available">available</option>
                  <option value="sold">sold</option>
                </select>
              </div>

            </div>
            
          </div>
          
        </div>

        <div class="flex flex-row gap-5 ml-[10.5%] mt-10">
          <div>
            <button type="submit" class="px-7 py-1 bg-black text-white">Update</button>
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

export default Update