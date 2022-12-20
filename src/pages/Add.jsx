import axios from 'axios';
import React from 'react';
import '../App.css';
import Banner from '../components/Banner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const text = () => {
  
  return <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit nesciunt, doloremque <br />
    corrupti, itaque alias sed, fugiat aliquid reprehenderit consectetur esse <br />
    possimus cum tempora soluta error eaque aut deleniti. Ab?
  </p>
}

function Add() {

  const propertyAdded = () => toast.success("Property Added Successfuly!",{
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

  const handleSubmit = event =>{
    event.preventDefault();

    const property = {
      "price": parseFloat(event.target.priceBox.value),
      "imageUrl": event.target.imageURL.value,
      "address": event.target.addressBox.value,
      "province": event.target.provinceBox.value,
      "beds": parseInt(event.target.bedsBox.value),
      "baths": parseInt(event.target.bathsBox.value) ,
      "type": event.target.typeBox.value,
      "seller" : {
        "firstName" : event.target.firstNameBox.value,
        "lastName" : event.target.lastNameBox.value,
        "phone" : event.target.phoneBox.value,
        "email" : event.target.emailBox.value,
        "sellerKey" : event.target.keyBox.value
      }
      
    }

    axios.post("http://localhost:8081/api/properties",property)
    .then((response) => {
      console.log(response);
      propertyAdded();
    }) 
    .catch((response) => {
      Error();
      console.log(response);
    })

    event.target.priceBox.value = "";
    event.target.imageURL.value = "";
    event.target.addressBox.value = "";
    event.target.provinceBox.value = "QC";
    event.target.bedsBox.value = "";
    event.target.bathsBox.value = "";
    event.target.typeBox.value = "House";
    event.target.firstNameBox.value = "";
    event.target.lastNameBox.value = "";
    event.target.phoneBox.value = "";
    event.target.emailBox.value = "";
    event.target.keyBox.value = "";
    

    

  }



  return (
    <div>
      <Banner Title="ADD" text={text()}/>

      <div class="py-[3%] pb-0 px-[10%]">

        <form onSubmit={handleSubmit}>
          <div class="flex flex-col justify-center ">
            <h2 class="text-sm font-thin">Seller Information</h2>
            <div class="border py-5 pl-10 pb-7 px-5 drop-shadow-lg bg-white my-4">
              <div class="flex flex-col">

                <div class="flex flex-row gap-5">

                  <div class="flex flex-col">
                    <label class="text-sm font-thin" htmlFor="">First Name</label>
                    <input name="firstNameBox" class="border pl-2" type="text" required  />
                  </div>
                  <div class="flex flex-col">
                    <label class="text-sm font-thin" htmlFor="">Last Name</label>
                    <input name="lastNameBox" class="border pl-2" type="text" required  />
                  </div>
                  
                  <div class="flex flex-col">
                    <label class="text-sm font-thin" htmlFor="">E-mail</label>
                    <input name="emailBox" class="border pl-2" type="email" required />
                  </div>

                </div>

                <div class="flex flex-row gap-5">

                  <div class="flex flex-col">
                    <label class="text-sm font-thin" htmlFor="">Phone</label>
                    <input name="phoneBox" class="border pl-2" type="text" maxlength="10" minLength="10" required />
                  </div>

                  <div class="flex flex-col">
                    <label class="text-sm font-thin" htmlFor="">Key</label>
                    <input name="keyBox" class="border w-46 pl-2" type="text" maxlength="6" minlength="6" required />
                  </div>

                </div>
                
                
              
              </div>

            </div>
          </div>

          <div>
            <h2 class="text-sm font-thin">Property Information</h2>
            <div class="py-5 px-5 pb-7 pl-10 border drop-shadow-lg bg-white my-4">
              <div class="flex gap-5">
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Address</label>
                  <input name="addressBox" class="border w-80 pl-2" type="text" required  />
                </div>
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Province</label>
                  <select name="provinceBox" id="" class="text-sm font-thin border">
                    <option value="QC">QC</option>
                    <option value="YT">YT</option>
                    <option value="NL">NL</option>
                    <option value="PE">PE</option>
                    <option value="NS">NS</option>
                    <option value="NB">NB</option>
                    <option value="ON">ON</option>
                    <option value="MB">MB</option>
                    <option value="SK">SK</option>
                    <option value="AB">AB</option>
                    <option value="BC">BC</option>
                    <option value="NT">NT</option>
                    <option value="NU">NU</option>
                  </select>
                </div>

                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Type</label>
                  <select  name="typeBox" id="" class="text-sm font-thin border">
                    <option value="House">House</option>
                    <option value="Villa">Villa</option>
                    <option value="Building">Building</option>
                  </select>
                </div>
              </div>

              <div class="">
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Image (url)</label>
                  <input name="imageURL" class="border w-96 pl-2" type="text" required />
                </div>
              </div>

              <div class="flex gap-5">
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Price</label>
                  <input name="priceBox" class="border pl-2" type="text" required  />
                </div>
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Beds</label>
                  <input name="bedsBox" class="border w-12 pl-2" type="number" required />
                </div>

                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Baths</label>
                  <input name="bathsBox" class="border w-12 pl-2" type="number" required  />
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-5 mt-10">
              <div>
                <button type="submit" class="px-7 py-1 bg-black text-white">Add</button>
                <ToastContainer />
              </div>
              <div>
                <button type="reset" class="px-5 py-1 bg-[lightgray] text-white">Clear</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Add