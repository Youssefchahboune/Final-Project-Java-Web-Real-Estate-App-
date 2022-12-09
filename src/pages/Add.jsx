import React from 'react';
import '../App.css';
import Banner from '../components/Banner';

const text = () => {
  
  return <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit nesciunt, doloremque <br />
    corrupti, itaque alias sed, fugiat aliquid reprehenderit consectetur esse <br />
    possimus cum tempora soluta error eaque aut deleniti. Ab?
  </p>
}

function Add() {
  return (
    <div>
      <Banner Title="ADD" text={text()}/>

      <div class="py-[3%] px-[10%]">

        <form action="">
          <div class="flex flex-col justify-center ">
            <h2 class="text-sm font-thin">Seller Information</h2>
            <div class="border py-5 pl-10 pb-7 px-5 drop-shadow-lg bg-white my-4">
              <div class="flex gap-5">
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">First Name</label>
                  <input class="border pl-2" type="text" required  />
                </div>
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Last Name</label>
                  <input class="border pl-2" type="text" required  />
                </div>
                
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">E-mail</label>
                  <input class="border pl-2" type="text" required />
                </div>
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Phone</label>
                  <input class="border pl-2" type="text" maxlength="10" minLength="10" required />
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
                  <input class="border w-80 pl-2" type="text" required  />
                </div>
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Province</label>
                  <select name="" id="" class="text-sm font-thin border">
                    <option value="">QC</option>
                    <option value="">YT</option>
                    <option value="">NL</option>
                    <option value="">PE</option>
                    <option value="">NS</option>
                    <option value="">NB</option>
                    <option value="">ON</option>
                    <option value="">MB</option>
                    <option value="">SK</option>
                    <option value="">AB</option>
                    <option value="">BC</option>
                    <option value="">NT</option>
                    <option value="">NU</option>
                  </select>
                </div>

                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Type</label>
                  <select  name="" id="" class="text-sm font-thin border">
                    <option value="">House</option>
                    <option value="">Villa</option>
                    <option value="">Building</option>
                  </select>
                </div>
              </div>

              <div class="">
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Image (url)</label>
                  <input class="border w-96 pl-2" type="text" required />
                </div>
              </div>

              <div class="flex gap-5">
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Price</label>
                  <input class="border pl-2" type="text" required  />
                </div>
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Beds</label>
                  <input class="border w-12 pl-2" type="number" required />
                </div>

                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Baths</label>
                  <input class="border w-12 pl-2" type="number" required  />
                </div>
              </div>

              <div class="">
                <div class="flex flex-col">
                  <label class="text-sm font-thin" htmlFor="">Key</label>
                  <input class="border w-52 pl-2" type="text" maxlength="6" minlength="6" required />
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-5 mt-10">
              <div>
                <button type="submit" class="px-7 py-1 bg-black text-white">Add</button>
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